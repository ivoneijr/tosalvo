import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Rescued, Shelter } from '@prisma/client';
import PageLayout from '@/components/layout/page-layout';

type RescuedWithShelter = Rescued & { shelter?: Shelter };

async function fetchRescues() {
  const response = await fetch('http://localhost:3000/api/v1/rescued', {
    method: 'GET',
    next: { revalidate: 5000 },
  });

  return response.json();
}

export default async function Home() {
  const data = await fetchRescues();
  const people = data.data as RescuedWithShelter[];

  return (
    <PageLayout
      title="Encontre pessoas"
      subtitle="Aqui voce vai encontrar a lista de pessoas resgatadas junto com o local e telefone para contato."
    >
      {/* filtering */}
      <div className="flex w-full items-center gap-6">
        <Input type="text" placeholder="Digite o nome aqui" className="w-full" />
        <Button type="submit" className="w-28">
          Buscar
        </Button>
      </div>

      {/* table */}
      <div className="mt-12">
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Abrigo</TableHead>
                <TableHead className="w-[100px]">Situação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {people.map((person) => (
                <TableRow key={person.id}>
                  <TableCell className="font-medium">{person?.name}</TableCell>
                  <TableCell>{person?.shelter?.name ?? '---'}</TableCell>
                  <TableCell className="text-right">{person?.status ?? 'Sem status'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </PageLayout>
  );
}
