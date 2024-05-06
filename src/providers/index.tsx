'use client';

import { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';

import { ThemeProvider } from './theme-provider';
import { ModalProvider } from '@/providers/modal-provider';

const PublicProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="tosalvo-theme"
    >
      <Toaster position="bottom-center" />
      <ModalProvider />
      {children}
    </ThemeProvider>
  );
};

export default PublicProvider;
