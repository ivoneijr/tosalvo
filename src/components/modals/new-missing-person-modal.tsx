'use client';

import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { useNewMissingPersonModal } from '@/hooks/use-new-missing-person-modal';

export const NewMissingPersonModal = () => {
  const modal = useNewMissingPersonModal();

  return (
    <Dialog open={modal.isOpen} onOpenChange={modal.onClose}>
      <DialogContent className="">
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">Informar Desaparecido</h2>
        </DialogHeader>
        {/*TODO: ADD CONTENT*/}
      </DialogContent>
    </Dialog>
  );
};
