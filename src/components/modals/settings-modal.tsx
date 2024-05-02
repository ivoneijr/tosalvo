'use client';

import { ModeToggle } from '@/components/layout/mode-toggle';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useSettings } from '@/hooks/use-settings';

export const SettingsModal = () => {
  const settings = useSettings();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent className="">
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">Configurações</h2>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Tema</Label>
            <span className="text-muted-foreground text-[0.8rem]">
              Customise como o a página da prestative parece no seu dispositivo
            </span>
          </div>
          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};
