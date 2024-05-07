import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../globals.css';
import { cn } from '@/lib/utils';
import PublicProvider from '@/providers';
// import Navbar from '@/components/layout/navbar';
// import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  description: '@ToSalvo',
  title: '@ToSalvo',
};

// TODO: refactor to use propsWithChildren
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable)}>
        <Analytics />
        <PublicProvider>
          <div className="relative flex min-h-screen flex-col bg-background">
            {/*<Navbar />*/}
            <main className="flex-1">{children}</main>
            {/*<Footer />*/}
          </div>
        </PublicProvider>
      </body>
    </html>
  );
}
