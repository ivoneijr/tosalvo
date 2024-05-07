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

import { RescuedWithShelter } from '@/server/actions/rescued';
import IntrinsicAttributes = React.JSX.IntrinsicAttributes;

export default function Table({
  items,
}: IntrinsicAttributes & { items: RescuedWithShelter[] | undefined }) {
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
            {items?.map((person) => (
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
