'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';

import { FadeInWhenVisible } from '@/components/layout/fade-in-when-visible';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useI18n } from '@/hooks/use-i18n';
import { i18n } from '@/lib/dictionary';
import Icon from '@/components/icons';

export function ModeToggle() {
  const { setTheme } = useTheme();
  const {
    state: { currentLanguage },
  } = useI18n();

  return (
    <FadeInWhenVisible direction="left">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="bg-secondary">
            <Icon
              name="sun"
              className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <Icon
              name="moon"
              className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span className="sr-only">
              {i18n.general.modals.settings.items.theme.content.span[currentLanguage]}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-secondary">
          <DropdownMenuItem
            className="cursor-pointer hover:bg-muted-foreground"
            onClick={() => setTheme('light')}
          >
            {i18n.general.modals.settings.items.theme.content.light[currentLanguage]}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer hover:bg-muted-foreground"
            onClick={() => setTheme('dark')}
          >
            {i18n.general.modals.settings.items.theme.content.dark[currentLanguage]}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer hover:bg-muted-foreground"
            onClick={() => setTheme('system')}
          >
            {i18n.general.modals.settings.items.theme.content.system[currentLanguage]}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </FadeInWhenVisible>
  );
}
