import { create } from 'zustand';

type NewShelterModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useNewShelterModal = create<NewShelterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
