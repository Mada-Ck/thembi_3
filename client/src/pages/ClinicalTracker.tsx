import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { trpc } from '../lib/trpc';
import { useAuth } from '../_core/hooks/useAuth';
import { useLocation } from 'wouter';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { toast } from 'sonner';
import { Skeleton } from '../components/ui/skeleton';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const clinicalSchema = z.object({
  districtId: z.string().min(1, "District is required"),
  taId: z.string().min(1, "T.A. is required"),
  facilityId: z.string().min(1, "Facility is required"),
  ageCohort: z.enum(['0-9', '10-14', '15-19', '20-24']),
  booked: z.number().min(0),
  attended: z.number().min(0),
  newEntrants: z.number().min(0),
  vlSamplesCollected: z.number().min(0),
  vlResultsReceived: z.number().min(0),
  vlResultsSuppressed: z.number().min(0),
}).refine(data => data.attended <= data.booked, {
  message: "Attended cannot be greater than Booked",
  path: ["attended"],
}).refine(data => data.vlResultsSuppressed <= data.vlResultsReceived, {
  message: "Virally Suppressed cannot be greater than VL Results Received",
  path: ["vlResultsSuppressed"],
});

type ClinicalFormValues = z.infer<typeof clinicalSchema>;

export default function ClinicalTracker() {
  const { user, loading: authLoading } = useAuth();
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  
  // Geography data
  const [districts, setDistricts] = useState<any[]>([]);
  const [tas, setTas] = useState<any[]>([]);
  const [facilities, setFacilities] = useState<any[]>([]);

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<ClinicalFormValues>({
    resolver: zodResolver(clinicalSchema),
    defaultValues: {
      booked: 0,
      attended: 0,
      newEntrants: 0,
      vlSamplesCollected: 0,
      vlResultsReceived: 0,
      vlResultsSuppressed: 0,
    }
  });

  const watchedValues = watch();
  const difference = (watchedValues.booked || 0) - (watchedValues.attended || 0);
  const retentionRate = watchedValues.booked > 0 ? ((watchedValues.attended / watchedValues.booked) * 100).toFixed(1) : "0";
  const suppressionRate = watchedValues.vlResultsReceived > 0 ? ((watchedValues.vlResultsSuppressed / watchedValues.vlResultsReceived) * 100).toFixed(1) : "0";

  useEffect(() => {
    if (!authLoading && (!user || (user.role !== 'admin' && user.role !== 'health-personnel'))) {
      toast.error("Unauthorized access");
      setLocation('/');
    }
  }, [user, authLoading, setLocation]);

  useEffect(() => {
    axios.get(`${API_URL}/api/districts`).then(res => setDistricts(res.data.docs));
  }, []);

  const handleDistrictChange = (id: string) => {
    setValue('districtId', id);
    setValue('taId', '');
    setValue('facilityId', '');
    axios.get(`${API_URL}/api/tas?where[district][equals]=${id}`).then(res => setTas(res.data.docs));
  };

  const handleTAChange = (id: string) => {
    setValue('taId', id);
    setValue('facilityId', '');
    axios.get(`${API_URL}/api/facilities?where[ta][equals]=${id}`).then(res => setFacilities(res.data.docs));
  };

  const onSubmit = async (data: ClinicalFormValues) => {
    try {
      await axios.post(`${API_URL}/api/clinical-sessions`, {
        ...data,
        facility: data.facilityId,
        date: new Date().toISOString(),
      });
      toast.success("Clinical session recorded successfully!");
      setStep(1);
    } catch (error) {
      toast.error("Failed to save session. Please check your connection.");
    }
  };

  if (authLoading) return <div className="p-8"><Skeleton className="h-64 w-full" /></div>;

  return (
    <div className="container mx-auto p-4 max-w-2xl py-12">
      <Card className="shadow-lg border-primary/20">
        <CardHeader className="bg-primary/5">
          <CardTitle className="text-2xl font-bold text-primary">Clinical Session Tracker</CardTitle>
          <CardDescription>Aggregate Data Entry Portal (Privacy Guaranteed)</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={`h-2 flex-1 mx-1 rounded-full ${step >= i ? 'bg-primary' : 'bg-gray-200'}`} />
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <h3 className="text-lg font-semibold">Step 1: Location</h3>
                <div className="space-y-2">
                  <Label>District</Label>
                  <Select onValueChange={handleDistrictChange} value={watchedValues.districtId}>
                    <SelectTrigger className="h-12"><SelectValue placeholder="Select District" /></SelectTrigger>
                    <SelectContent>
                      {districts.map(d => <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>T.A.</Label>
                  <Select onValueChange={handleTAChange} value={watchedValues.taId} disabled={!watchedValues.districtId}>
                    <SelectTrigger className="h-12"><SelectValue placeholder="Select T.A." /></SelectTrigger>
                    <SelectContent>
                      {tas.map(t => <SelectItem key={t.id} value={t.id}>{t.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Facility</Label>
                  <Select onValueChange={(v) => setValue('facilityId', v)} value={watchedValues.facilityId} disabled={!watchedValues.taId}>
                    <SelectTrigger className="h-12"><SelectValue placeholder="Select Facility" /></SelectTrigger>
                    <SelectContent>
                      {facilities.map(f => <SelectItem key={f.id} value={f.id}>{f.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <h3 className="text-lg font-semibold">Step 2: Cohort</h3>
                <div className="space-y-2">
                  <Label>Age Group</Label>
                  <Select onValueChange={(v: any) => setValue('ageCohort', v)} value={watchedValues.ageCohort}>
                    <SelectTrigger className="h-12"><SelectValue placeholder="Select Age Group" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-9">0-9</SelectItem>
                      <SelectItem value="10-14">10-14</SelectItem>
                      <SelectItem value="15-19">15-19</SelectItem>
                      <SelectItem value="20-24">20-24</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <h3 className="text-lg font-semibold">Step 3: Attendance</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label>Booked</Label>
                    <Input type="number" className="h-12 text-lg" {...register('booked', { valueAsNumber: true })} />
                  </div>
                  <div className="space-y-2">
                    <Label>Attended</Label>
                    <Input type="number" className="h-12 text-lg" {...register('attended', { valueAsNumber: true })} />
                    {errors.attended && <p className="text-red-500 text-sm">{errors.attended.message}</p>}
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center border">
                    <span className="font-medium">Difference:</span>
                    <span className={`text-xl font-bold ${difference > 0 ? 'text-red-500' : 'text-green-600'}`}>{difference}</span>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg flex justify-between items-center border border-primary/20">
                    <span className="font-medium">Retention Rate:</span>
                    <span className="text-xl font-bold text-primary">{retentionRate}%</span>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <h3 className="text-lg font-semibold">Step 4: Clinical Cascade</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2"><Label>New Entrants</Label><Input type="number" className="h-12" {...register('newEntrants', { valueAsNumber: true })} /></div>
                  <div className="space-y-2"><Label>VL Samples Collected</Label><Input type="number" className="h-12" {...register('vlSamplesCollected', { valueAsNumber: true })} /></div>
                  <div className="space-y-2"><Label>VL Results Received</Label><Input type="number" className="h-12" {...register('vlResultsReceived', { valueAsNumber: true })} /></div>
                  <div className="space-y-2">
                    <Label>Virally Suppressed</Label>
                    <Input type="number" className="h-12" {...register('vlResultsSuppressed', { valueAsNumber: true })} />
                    {errors.vlResultsSuppressed && <p className="text-red-500 text-sm">{errors.vlResultsSuppressed.message}</p>}
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg flex justify-between items-center border border-primary/20">
                    <span className="font-medium">Suppression Rate:</span>
                    <span className="text-xl font-bold text-primary">{suppressionRate}%</span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-4 pt-6">
              {step > 1 && (
                <Button type="button" variant="outline" className="flex-1 h-12 text-lg" onClick={() => setStep(s => s - 1)}>Back</Button>
              )}
              {step < 4 ? (
                <Button type="button" className="flex-1 h-12 text-lg" onClick={() => setStep(s => s + 1)}>Next</Button>
              ) : (
                <Button type="submit" className="flex-1 h-12 text-lg bg-green-600 hover:bg-green-700">Submit Session</Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
