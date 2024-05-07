'use client';

import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { useNewShelterModal } from '@/hooks/use-new-shelter-modal';

export const NewShelterModal = () => {
  const modal = useNewShelterModal();

  return (
    <Dialog open={modal.isOpen} onOpenChange={modal.onClose}>
      <DialogContent className="">
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">Cadastrar novo Abrigo</h2>
        </DialogHeader>
        {/*TODO: ADD CONTENT*/}
        Em breve...
      </DialogContent>
    </Dialog>
  );
};
