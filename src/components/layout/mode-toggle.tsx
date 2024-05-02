"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { FadeInWhenVisible } from "@/components/layout/fade-in-when-visible";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <FadeInWhenVisible direction="left">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="bg-secondary">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Mudar o tema</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-secondary">
          <DropdownMenuItem
            className="cursor-pointer hover:bg-muted-foreground"
            onClick={() => setTheme("light")}
          >
            Claro
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer hover:bg-muted-foreground"
            onClick={() => setTheme("dark")}
          >
            Escuro
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer hover:bg-muted-foreground"
            onClick={() => setTheme("system")}
          >
            Padrão do sistema
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </FadeInWhenVisible>
  );
}
