'use client';

import { SettingsModal } from '@/components/modals/settings-modal';
import { useEffect, useState } from 'react';
import { NewMissingPersonModal } from '@/components/modals/new-missing-person-modal';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettingsModal />
      <NewMissingPersonModal />
    </>
  );
};
