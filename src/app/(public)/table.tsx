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
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';

export default function Table({
  items,
}: IntrinsicAttributes & { items: RescuedWithShelter[] | undefined }) {
  return (
    <div className="mt-12">
      <Card>
        <UiTable>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Foto</TableHead>
              <TableHead>Nome</TableHead>
              {/*<TableHead>Abrigo</TableHead>*/}
              <TableHead>Contato</TableHead>
              {/*<TableHead className="w-[100px]">Situação</TableHead>*/}
              <TableHead>Detalhes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items?.map((person) => (
              <TableRow key={person.id}>
                <TableCell>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
                        <AvatarImage
                          src={person.photo_url ?? ''}
                          alt={`Imagem de ${person.name}`}
                        />
                        <AvatarFallback>{person.name.substring(0, 1)}</AvatarFallback>
                      </Avatar>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="overflow-hidden rounded-md">
                        <Image
                          src={person.photo_url ?? ''}
                          alt={`Imagem de ${person.name}`}
                          width={200}
                          height={200}
                          className={cn(
                            'h-auto w-auto object-cover transition-all hover:scale-105',
                            'aspect-square',
                            // aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square',
                          )}
                        />
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </TableCell>
                <TableCell className="font-medium">{person?.name}</TableCell>
                {/*<TableCell>{person?.shelter?.name ?? '---'}</TableCell>*/}
                <TableCell>{person?.contact}</TableCell>
                {/*<TableCell className="text-right">{person?.status ?? 'Sem status'}</TableCell>*/}
                <TableCell>{person?.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </UiTable>
      </Card>
    </div>
  );
}
