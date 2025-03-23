<template>
    <header class="flex justify-between items-center m-4 mb-8 z-10">
        <!-- Menu mobile (Dropdown) -->
        <DropdownMenu v-model:open="open">
            <DropdownMenuTrigger as-child>
                <Button class="sm:hidden" @click="open = !open">Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem v-for="route in routes" :key="route.name">
                    <NuxtLink :to="route.href" class="text-sm font-medium transition-colors hover:text-primary"
                        :class="{ 'text-primary': route.href === currentPath, 'text-muted-foreground': route.href !== currentPath }"
                        @click="open = false">
                        {{ route.name }}
                    </NuxtLink>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

        <!-- Menu desktop -->
        <NavigationMenu class="hidden sm:block">
            <NavigationMenuList class="flex gap-4">
                <NavigationMenuItem v-for="route in routes" :key="route.name">
                    <NavigationMenuLink as-child>
                        <NuxtLink :to="route.href" class="text-sm font-medium transition-colors hover:text-primary"
                            :class="{ 'text-primary': route.href === currentPath, 'text-muted-foreground': route.href !== currentPath }">
                            {{ route.name }}
                        </NuxtLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

        <!-- Theme Toggle -->
        <ThemeToggle />
    </header>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./theme-toggle.vue";

// État du menu mobile
const open = ref(false);

// Détection du chemin actuel
const route = useRoute();
const currentPath = computed(() => route.path);

// Liste des routes
const routes = [
    { name: "Accueil", href: "/" },
    { name: "Projets", href: "/projets" },
    { name: "Expériences", href: "/experiences" },
    { name: "Formations", href: "/formations" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];
</script>
