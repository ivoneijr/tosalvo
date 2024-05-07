'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Filtering() {
  return (
    <div className="flex w-full items-center gap-6">
      <Input type="text" placeholder="Digite o nome aqui" className="w-full" />
      <Button type="submit" className="w-28">
        Buscar
      </Button>
    </div>
  );
}
