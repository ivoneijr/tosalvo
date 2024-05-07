'use client';

import {
  Table as UiTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card } from '@/components/ui/card';

import { useGetRescued } from '@/data/get-rescued';

export default function Table() {
  const { data, error, isLoading } = useGetRescued();

  if (error) return <>error...</>;

  if (data) {
    return (
      <div className="mt-12">
        <Card>
          <UiTable>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Abrigo</TableHead>
                <TableHead className="w-[100px]">Situação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((person) => (
                <TableRow key={person.id}>
                  <TableCell className="font-medium">{person?.name}</TableCell>
                  <TableCell>{person?.shelter?.name ?? '---'}</TableCell>
                  <TableCell className="text-right">{person?.status ?? 'Sem status'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </UiTable>
        </Card>
      </div>
    );
  }
}
