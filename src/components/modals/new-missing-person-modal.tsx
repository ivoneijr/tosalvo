'use client';

import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { useNewMissingPersonModal } from '@/hooks/use-new-missing-person-modal';
// import { createShelter } from '@/server/actions/shelter';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { createRescued } from '@/server/actions/rescued';

export const NewMissingPersonModal = () => {
  const modal = useNewMissingPersonModal();
  // TODO: fetch shelters to use select input

  return (
    <Dialog open={modal.isOpen} onOpenChange={modal.onClose}>
      <DialogContent className="">
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">Informar Desaparecido</h2>
        </DialogHeader>

        <form
          id="new-shelter-form"
          action={createRescued}
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
            {/*TODO create select input*/}
            {/*<Input*/}
            {/*  id="shelter"*/}
            {/*  name="shelter"*/}
            {/*  type="text"*/}
            {/*  placeholder="Endereço"*/}
            {/*  className="w-full"*/}
            {/*/>*/}
            <Input
              id="contact"
              name="contact"
              type="text"
              placeholder="Contanto no abrigo (opcional)"
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
