'use client';

import { i18n } from '@/lib/dictionary';

import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { I18nToggle } from '@/components/i18n-toggle';
import { ModeToggle } from '@/components/mode-toggle';

import { useSettings } from '@/hooks/use-settings';
import { useI18n } from '@/hooks/use-i18n';

export const SettingsModal = () => {
  const settings = useSettings();
  const {
    state: { currentLanguage },
  } = useI18n();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent className="">
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">
            {i18n.general.modals.settings.title[currentLanguage]}
          </h2>
        </DialogHeader>

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>{i18n.general.modals.settings.items.theme.label[currentLanguage]}</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              {i18n.general.modals.settings.items.theme.description[currentLanguage]}
            </span>
          </div>
          <ModeToggle />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>{i18n.general.modals.settings.items.language.label[currentLanguage]}</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              {i18n.general.modals.settings.items.language.description[currentLanguage]}
            </span>
          </div>
          <I18nToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};
