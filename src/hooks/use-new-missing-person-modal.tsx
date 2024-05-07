import { create } from 'zustand';

type NewMissingPersonModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useNewMissingPersonModal = create<NewMissingPersonModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
