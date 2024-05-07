'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { updateFiltering } from '@/server/actions/rescued';

export default function Filtering() {
  return (
    <form action={updateFiltering}>
      <div className="flex w-full items-center gap-6">
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Digite o nome aqui"
          className="w-full"
        />
        <Button type="submit" className="w-28">
          Buscar
        </Button>
      </div>
    </form>
  );
}
