import React, { useState } from 'react';
import { trpc } from '../lib/trpc';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import Base from "@/components/layout/Base";

export default function Dashboard() {
  const [facilityId, setFacilityId] = useState<string | undefined>();

  const { data: clinicalData, isLoading } = trpc.reporting.getClinicalData.useQuery({
    facilityId,
  });

  const exportMutation = trpc.reporting.exportData.useMutation();

  const handleExport = (format: 'pdf' | 'excel' | 'csv') => {
    exportMutation.mutate({ format, facilityId });
  };

  return (
    <Base>
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">The Thembi Project - Clinical Dashboard</h1>
          <div className="flex gap-2">
            <Button onClick={() => handleExport('pdf')} variant="outline">Export PDF</Button>
            <Button onClick={() => handleExport('excel')} variant="outline">Export Excel</Button>
            <Button onClick={() => handleExport('csv')} variant="outline">Export CSV</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Filter by Facility</CardTitle>
            </CardHeader>
            <CardContent>
              <Select onValueChange={setFacilityId}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Facility" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="chitipa">Chitipa District Hospital</SelectItem>
                  <SelectItem value="kameme">Kameme Rural</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Clinical Sessions Data</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p>Loading data...</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Facility</TableHead>
                    <TableHead>Cohort</TableHead>
                    <TableHead>Booked</TableHead>
                    <TableHead>Attended</TableHead>
                    <TableHead>Retention %</TableHead>
                    <TableHead>VL Suppressed %</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clinicalData?.data.map((session) => (
                    <TableRow key={session.id}>
                      <TableCell>{session.facility}</TableCell>
                      <TableCell>{session.ageCohort}</TableCell>
                      <TableCell>{session.booked}</TableCell>
                      <TableCell>{session.attended}</TableCell>
                      <TableCell>{session.retentionRate}%</TableCell>
                      <TableCell>{session.suppressionPercentage}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </Base>
  );
}

