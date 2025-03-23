<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="outline" size="icon">
                <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon
                    class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span class="sr-only">Toggle theme</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem @click="setTheme('light')">Light</DropdownMenuItem>
            <DropdownMenuItem @click="setTheme('dark')">Dark</DropdownMenuItem>
            <DropdownMenuItem @click="setTheme('system')">System</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<script setup lang="ts">
import { Moon, Sun } from "lucide-vue-next";
import { useColorMode } from "#imports";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// Récupérer et modifier le mode couleur
const colorMode = useColorMode();
const setTheme = (theme: string) => (colorMode.preference = theme);
</script>
