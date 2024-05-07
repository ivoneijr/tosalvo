import type { PropsWithChildren } from 'react';

interface Props {
  title: string;
  subtitle: string;
}

export default function PageLayout({ children, title, subtitle }: PropsWithChildren<Props>) {
  return (
    <div className="p-12">
      <div className="mb-12">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
      </div>

      <div>{children}</div>
    </div>
  );
}
