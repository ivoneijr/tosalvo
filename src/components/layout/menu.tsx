'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FadeInWhenVisible } from '@/components/layout/fade-in-when-visible';

import { cn } from '@/lib/utils';
import { i18n } from '@/lib/dictionary';
import { useI18n } from '@/hooks/use-i18n';

const Menu = () => {
  const path = usePathname();
  const {
    state: { currentLanguage },
  } = useI18n();

  const routes = [
    {
      id: 0,
      href: '/',
      label: i18n.general.menu.home[currentLanguage],
    },
    {
      id: 2,
      href: '/pets',
      label: i18n.general.menu.pets[currentLanguage],
    },
  ];

  return (
    <div
      className={cn(
        'fixed top-0 z-10 flex w-full items-center justify-center p-4 backdrop-blur-lg transition-all',
      )}
    >
      <FadeInWhenVisible direction="down">
        <Tabs defaultValue={path}>
          <TabsList className="w-full">
            {routes.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </TabsList>
        </Tabs>
      </FadeInWhenVisible>
    </div>
  );
};

interface MenuItemProps {
  item: { id: number; href: string; label: string; sub?: never[] };
}

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <Link href={item.href}>
      <TabsTrigger value={item.href}>{item.label}</TabsTrigger>
    </Link>
  );
};

export default Menu;
