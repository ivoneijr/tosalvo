'use client';

import { FadeInWhenVisible } from '@/components/layout/fade-in-when-visible';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useSettings } from '@/hooks/use-settings';
import { Button } from '@/components/ui/button';
import Icon from '@/components/icons';
import Menu from '@/components/layout/menu';

const Logo = () => {
  return (
    <div className="fixed top-4 z-50 flex items-center gap-x-2 ">
      <FadeInWhenVisible direction="right">
        <Link
          href="/"
          className="fixed left-8 top-6 z-20 w-64 cursor-pointer items-center gap-x-2 transition-opacity duration-300"
        >
          <Image src="/images/full-logo.png" alt="logo full" width={200} height={100} />
        </Link>
      </FadeInWhenVisible>
    </div>
  );
};

const Settings = () => {
  const settings = useSettings();

  return (
    <div className="fixed right-3 top-4 z-50 flex items-center gap-x-2 ">
      <FadeInWhenVisible direction="left">
        <Button variant="outline" size="icon" className="bg-secondary">
          <Icon
            name="settings"
            onClick={settings.onOpen}
            className={cn('ml-2 mr-2 h-[18px] w-[18px] shrink-0 text-muted-foreground')}
          />
        </Button>
      </FadeInWhenVisible>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="fixed right-24 top-4 z-50 flex items-center gap-x-2 ">
      <FadeInWhenVisible direction="left">
        <Button className="bg-orange-500 text-xl">Contato</Button>
      </FadeInWhenVisible>
    </div>
  );
};

export default function Navbar() {
  return (
    <header className="flex h-20 border-b shadow-sm transition-all">
      <Menu />
      <Settings />
    </header>
  );
}
