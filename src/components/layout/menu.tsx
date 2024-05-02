'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FadeInWhenVisible } from '@/components/layout/fade-in-when-visible';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const routes = [
  {
    id: 0,
    href: '/',
    label: 'Inicial',
  },
  {
    id: 2,
    href: '/blog',
    label: 'Blog',
  },
];

const Menu = () => {
  const path = usePathname();

  return (
    <FadeInWhenVisible direction="down">
      <Tabs defaultValue={path}>
        <TabsList className="w-full">
          {routes.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </TabsList>
      </Tabs>
    </FadeInWhenVisible>
  );
};

interface MenuItemProps {
  item: { id: number; href: string; label: string; sub?: any[] };
}

const MenuItem = ({ item }: MenuItemProps) => {
  if (!item.sub) {
    return (
      <Link href={item.href}>
        <TabsTrigger value={item.href}>{item.label}</TabsTrigger>
      </Link>
    );
  }

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <TabsTrigger value={item.href}>{item.label}</TabsTrigger>
        </PopoverTrigger>
        <PopoverContent>
          {item.sub.map((si) => (
            <Tabs key={si.id} defaultValue={''}>
              <TabsList className="w-full">
                <Link href={item.href}>
                  <TabsTrigger value={item.href}>{item.label}</TabsTrigger>
                </Link>
              </TabsList>
            </Tabs>
          ))}
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Menu;
