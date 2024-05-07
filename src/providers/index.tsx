import { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';

import { ThemeProvider } from './theme-provider';
import { ModalProvider } from '@/providers/modal-provider';
import ReactQueryProvider from '@/providers/react-query';

async function PublicProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="tosalvo-theme"
    >
      <ReactQueryProvider>
        <Toaster position="bottom-center" />
        <ModalProvider />
        {children}
      </ReactQueryProvider>
    </ThemeProvider>
  );
}

export default PublicProvider;
