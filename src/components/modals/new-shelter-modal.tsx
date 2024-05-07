'use client';

import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { useNewShelterModal } from '@/hooks/use-new-shelter-modal';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { createShelter } from '@/server/actions/shelter';
import { Textarea } from '@/components/ui/textarea';

export const NewShelterModal = () => {
  const modal = useNewShelterModal();

  return (
    <Dialog open={modal.isOpen} onOpenChange={modal.onClose}>
      <DialogContent className="">
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">Cadastrar novo Abrigo</h2>
        </DialogHeader>

        <form
          id="new-shelter-form"
          action={createShelter}
          onSubmit={() => {
            modal.onClose();
          }}
        >
          <div className="flex w-full flex-col items-center gap-6">
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Digite o nome aqui"
              className="w-full"
            />
            <Input
              id="address"
              name="address"
              type="text"
              placeholder="Endereço"
              className="w-full"
            />
            <Input
              id="address_url"
              name="address_url"
              type="text"
              placeholder="Endereço"
              className="w-full"
            />
            <Textarea
              id="description"
              name="description"
              placeholder="Descrição (opcional)"
              className="w-full"
            />
            <Button type="submit" className="w-full">
              Salvar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
