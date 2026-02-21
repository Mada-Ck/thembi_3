import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useLocation } from 'wouter';
import { useAuth } from '../_core/hooks/useAuth';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { toast } from 'sonner';
import { Skeleton } from '../components/ui/skeleton';
import { Save, RefreshCcw, AlertCircle, CheckCircle2, MapPin, UserCheck, LayoutGrid } from 'lucide-react';
import axios from 'axios';
import Base from "@/components/layout/Base";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const cohortSchema = z.object({
  ageCohort: z.string(),
  booked: z.number().min(0, "Min 0"),
  attended: z.number().min(0, "Min 0"),
  newEntrants: z.number().min(0, "Min 0"),
  vlSamplesCollected: z.number().min(0, "Min 0"),
  vlResultsReceived: z.number().min(0, "Min 0"),
  vlResultsSuppressed: z.number().min(0, "Min 0"),
});

const clinicalSchema = z.object({
  districtId: z.string().min(1, "District is required"),
  taId: z.string().min(1, "T.A. is required"),
  facilityId: z.string().min(1, "Facility is required"),
  date: z.string().min(1, "Date is required"),
  cohorts: z.array(cohortSchema),
});

type ClinicalFormValues = z.infer<typeof clinicalSchema>;

const COHORTS = ['0-9', '10-14', '15-19', '20-24'];

export default function ClinicalTracker() {
  const { user, loading: authLoading } = useAuth();
  const [, setLocation] = useLocation();
  const [submitting, setSubmitting] = useState(false);

  // Geography data
  const [districts, setDistricts] = useState<any[]>([]);
  const [tas, setTas] = useState<any[]>([]);
  const [facilities, setFacilities] = useState<any[]>([]);

  const { register, control, handleSubmit, watch, setValue, formState: { errors } } = useForm<ClinicalFormValues>({
    resolver: zodResolver(clinicalSchema),
    defaultValues: {
      date: new Date().toISOString().split('T')[0],
      cohorts: COHORTS.map(cohort => ({
        ageCohort: cohort,
        booked: 0,
        attended: 0,
        newEntrants: 0,
        vlSamplesCollected: 0,
        vlResultsReceived: 0,
        vlResultsSuppressed: 0,
      }))
    }
  });

  const { fields } = useFieldArray({
    control,
    name: "cohorts"
  });

  const watchedValues = watch();

  // Authentication & Authorization check
  useEffect(() => {
    if (!authLoading && (!user || (user.role !== 'admin' && user.role !== 'health-personnel'))) {
      if (!user) {
        toast.error("Authentication required to access Clinical Portal");
        setLocation('/login');
      } else {
        toast.error("Unauthorized: Portal access restricted to health personnel");
        setLocation('/');
      }
    }
  }, [user, authLoading, setLocation]);

  useEffect(() => {
    axios.get(`${API_URL}/api/districts`).then(res => {
      if (res.data?.docs) {
        setDistricts(res.data.docs);
      }
    }).catch(err => {
      console.error("Failed to fetch districts:", err);
      toast.error("Error loading geography data");
    });
  }, []);

  const handleDistrictChange = (id: string) => {
    setValue('districtId', id);
    setValue('taId', '');
    setValue('facilityId', '');
    setTas([]);
    setFacilities([]);
    axios.get(`${API_URL}/api/tas?where[district][equals]=${id}`).then(res => {
      if (res.data?.docs) {
        setTas(res.data.docs);
      }
    });
  };

  const handleTAChange = (id: string) => {
    setValue('taId', id);
    setValue('facilityId', '');
    setFacilities([]);
    axios.get(`${API_URL}/api/facilities?where[ta][equals]=${id}`).then(res => {
      if (res.data?.docs) {
        setFacilities(res.data.docs);
      }
    });
  };

  const onSubmit = async (data: ClinicalFormValues) => {
    setSubmitting(true);
    try {
      const activeCohorts = data.cohorts.filter(c =>
        c.booked > 0 || c.attended > 0 || c.newEntrants > 0 || c.vlSamplesCollected > 0
      );

      if (activeCohorts.length === 0) {
        toast.error("Data matrix is empty. Please enter values for at least one cohort.");
        setSubmitting(false);
        return;
      }

      const postPromises = activeCohorts.map(cohort =>
        axios.post(`${API_URL}/api/clinical-sessions`, {
          facility: data.facilityId,
          date: data.date,
          ...cohort
        })
      );

      await Promise.all(postPromises);

      toast.success(`Submission Success! Recorded stats for ${activeCohorts.length} cohorts.`);
      setTimeout(() => window.location.reload(), 1500);
    } catch (error) {
      toast.error("Submission failed. Network error or server busy.");
    } finally {
      setSubmitting(false);
    }
  };

  const calculateRetention = (booked: number, attended: number) => {
    if (booked === 0) return "0.0";
    return ((attended / booked) * 100).toFixed(1);
  };

  const calculateSuppression = (received: number, suppressed: number) => {
    if (received === 0) return "0.0";
    return ((suppressed / received) * 100).toFixed(1);
  };

  if (authLoading) return <Base><div className="p-12"><Skeleton className="h-96 w-full rounded-2xl" /></div></Base>;

  return (
    <Base>
      <div className="container mx-auto p-4 py-8 max-w-7xl animate-in fade-in duration-500">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Side Control Panel */}
          <div className="lg:w-1/4 space-y-6">
            <div className="space-y-2 mb-4">
              <h1 className="text-3xl font-extrabold text-primary tracking-tight">Portal Entry</h1>
              <p className="text-muted-foreground text-sm uppercase font-semibold flex items-center gap-2">
                <UserCheck className="w-4 h-4" /> {user?.email || 'Unauthorized'}
              </p>
            </div>

            <Card className="shadow-soft border-primary/10 overflow-hidden">
              <CardHeader className="bg-primary/5 py-3 border-b border-primary/5">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Site & Time
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-5">
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground">Reporting Period</Label>
                  <Input type="date" {...register('date')} className="h-10 focus:ring-primary font-medium" />
                </div>

                <div className="space-y-2 pt-2 border-t">
                  <Label className="text-xs font-bold uppercase text-muted-foreground">District</Label>
                  <Select onValueChange={handleDistrictChange} value={watchedValues.districtId}>
                    <SelectTrigger className="h-10 border-primary/20"><SelectValue placeholder="Select District" /></SelectTrigger>
                    <SelectContent>
                      {districts?.map((d: any) => <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground">Traditional Authority</Label>
                  <Select onValueChange={handleTAChange} value={watchedValues.taId} disabled={!watchedValues.districtId}>
                    <SelectTrigger className="h-10 border-primary/20"><SelectValue placeholder="Select T.A." /></SelectTrigger>
                    <SelectContent>
                      {tas?.map((t: any) => <SelectItem key={t.id} value={t.id}>{t.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground">Health Facility</Label>
                  <Select onValueChange={(v) => setValue('facilityId', v)} value={watchedValues.facilityId} disabled={!watchedValues.taId}>
                    <SelectTrigger className="h-10 border-primary/20"><SelectValue placeholder="Select Facility" /></SelectTrigger>
                    <SelectContent>
                      {facilities?.map((f: any) => <SelectItem key={f.id} value={f.id}>{f.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <div className="p-4 rounded-xl bg-orange-50 border border-orange-100 flex gap-3 text-orange-800 text-xs shadow-inner-soft">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p>Verify all registry books before submission. Submitted data is final for the current reporting cycle.</p>
            </div>
          </div>

          {/* Tabular Matrix */}
          <div className="flex-1">
            <Card className="shadow-elevated border-primary/10 rounded-2xl overflow-hidden border-none">
              <CardHeader className="bg-primary/95 text-primary-foreground p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-xl">
                      <LayoutGrid className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold tracking-tight">Clinical Monitoring Matrix</CardTitle>
                      <CardDescription className="text-primary-foreground/80 font-medium italic">
                        Aggregate Health Indicators by Age Cohort
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <div className="overflow-x-auto min-h-[400px]">
                <Table className="border-collapse">
                  <TableHeader className="bg-muted/30">
                    <TableRow className="border-b-2 border-primary/10">
                      <TableHead className="w-[120px] font-extrabold text-foreground px-6">COHORT</TableHead>
                      <TableHead className="font-bold text-center bg-blue-50/20 text-blue-900 border-x border-primary/5">BOOKED</TableHead>
                      <TableHead className="font-bold text-center bg-blue-50/20 text-blue-900 border-x border-primary/5">ATTND</TableHead>
                      <TableHead className="font-extrabold text-primary text-center px-4">RET %</TableHead>
                      <TableHead className="font-bold text-center bg-green-50/20 text-green-900 border-x border-primary/5">NEW</TableHead>
                      <TableHead className="font-bold text-center bg-orange-50/20 text-orange-900 border-x border-primary/5">VL COLL</TableHead>
                      <TableHead className="font-bold text-center bg-orange-50/20 text-orange-900 border-x border-primary/5">VL RECV</TableHead>
                      <TableHead className="font-bold text-center bg-orange-50/20 text-orange-900 border-x border-primary/5">VL SUPP</TableHead>
                      <TableHead className="font-extrabold text-primary text-center px-4">SUPP %</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {fields?.map((field, index) => {
                      const row = watchedValues.cohorts?.[index];
                      if (!row) return null;

                      const retRate = calculateRetention(row.booked, row.attended);
                      const suppRate = calculateSuppression(row.vlResultsReceived, row.vlResultsSuppressed);

                      const highlightErrorAttr = row.attended > row.booked;
                      const highlightErrorSupp = row.vlResultsSuppressed > row.vlResultsReceived;

                      return (
                        <TableRow key={field.id} className="transition-all hover:bg-primary/5 border-b border-muted group">
                          <TableCell className="font-bold text-primary bg-muted/10 px-6 py-4">{row.ageCohort}</TableCell>

                          <TableCell className="p-2 border-x border-primary/5">
                            <Input
                              type="number"
                              className="w-16 h-10 mx-auto text-center font-bold border-muted group-hover:border-primary/40 focus:ring-primary shadow-sm"
                              {...register(`cohorts.${index}.booked`, { valueAsNumber: true })}
                            />
                          </TableCell>
                          <TableCell className="p-2 border-x border-primary/5">
                            <Input
                              type="number"
                              className={`w-16 h-10 mx-auto text-center font-bold shadow-sm transition-colors ${highlightErrorAttr ? 'bg-red-50 border-destructive text-destructive' : 'border-muted group-hover:border-primary/40'}`}
                              {...register(`cohorts.${index}.attended`, { valueAsNumber: true })}
                            />
                          </TableCell>
                          <TableCell className={`text-center font-black text-xs tabular-nums ${parseFloat(retRate) < 100 && row.booked > 0 ? 'text-orange-600' : 'text-primary'}`}>
                            {retRate}%
                          </TableCell>

                          <TableCell className="p-2 border-x border-primary/5">
                            <Input
                              type="number"
                              className="w-16 h-10 mx-auto text-center font-bold border-muted group-hover:border-primary/40 shadow-sm"
                              {...register(`cohorts.${index}.newEntrants`, { valueAsNumber: true })}
                            />
                          </TableCell>

                          <TableCell className="p-2 border-x border-primary/5">
                            <Input
                              type="number"
                              className="w-16 h-10 mx-auto text-center font-bold border-muted group-hover:border-primary/40 shadow-sm"
                              {...register(`cohorts.${index}.vlSamplesCollected`, { valueAsNumber: true })}
                            />
                          </TableCell>
                          <TableCell className="p-2 border-x border-primary/5">
                            <Input
                              type="number"
                              className="w-16 h-10 mx-auto text-center font-bold border-muted group-hover:border-primary/40 shadow-sm"
                              {...register(`cohorts.${index}.vlResultsReceived`, { valueAsNumber: true })}
                            />
                          </TableCell>
                          <TableCell className="p-2 border-x border-primary/5">
                            <Input
                              type="number"
                              className={`w-16 h-10 mx-auto text-center font-bold shadow-sm transition-colors ${highlightErrorSupp ? 'bg-red-50 border-destructive text-destructive' : 'border-muted group-hover:border-primary/40'}`}
                              {...register(`cohorts.${index}.vlResultsSuppressed`, { valueAsNumber: true })}
                            />
                          </TableCell>
                          <TableCell className="text-primary text-center font-black text-xs tabular-nums">
                            {suppRate}%
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>

              <div className="p-8 bg-muted/10 border-t flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="space-y-1">
                  <p className="text-sm font-bold text-foreground">A Promise of Hope - Reporting Integrity</p>
                  <p className="text-xs text-muted-foreground italic">Standard Malawi DHIS2 aggregate matrix for HIV services.</p>
                </div>

                <Button
                  className={`w-full md:w-auto px-16 h-14 text-lg font-extrabold shadow-elevated rounded-xl transition-all duration-300 ${!watchedValues.facilityId ? 'opacity-50 grayscale' : 'hover:scale-105 active:scale-95'}`}
                  onClick={handleSubmit(onSubmit)}
                  disabled={submitting || !watchedValues.facilityId}
                >
                  {submitting ? (
                    <RefreshCcw className="w-5 h-5 animate-spin mr-3 text-white" />
                  ) : (
                    <Save className="w-5 h-5 mr-3 text-white" />
                  )}
                  {submitting ? 'VALIDATING...' : 'SUBMIT DATA BATCH'}
                </Button>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </Base>
  );
}
