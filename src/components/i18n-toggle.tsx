'use client';

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

export function I18nToggle() {
  const {
    state: { currentLanguage },
    actions: { setCurrentLanguage },
  } = useI18n();

  return (
    <FadeInWhenVisible direction="left">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="bg-secondary">
            <Icon
              name="languages"
              className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <span className="sr-only">
              {i18n.general.modals.settings.items.language.content.span[currentLanguage]}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-secondary">
          <DropdownMenuItem
            className="hover:bg-muted-foreground cursor-pointer"
            onClick={() => setCurrentLanguage('pt-br')}
          >
            {i18n.general.modals.settings.items.language.content.pt[currentLanguage]}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:bg-muted-foreground cursor-pointer"
            onClick={() => setCurrentLanguage('en-us')}
          >
            {i18n.general.modals.settings.items.language.content.en[currentLanguage]}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </FadeInWhenVisible>
  );
}
