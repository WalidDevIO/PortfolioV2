"use client"

import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export function Navbar() {
    const pathname = usePathname();

    const [open, setOpen] = useState(false);

    const routes = [
        {
            name: "Accueil",
            href: "/",
        },
        {
            name: "Projets",
            href: "/projets",
        },
        {
            name: "Expériences",
            href: "/experiences",
        },
        {
            name: "Formations",
            href: "/formations",
        },
        {
            name: "Contact",
            href: "/contact",
        },
    ];

    return (
        <header className="flex justify-between items-center m-4 mb-8">
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger className="sm:hidden" asChild>
                    <Button>Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {routes.map((route: { name: string; href: string }) => (
                        <DropdownMenuItem key={route.name}>
                            <Link prefetch onClick={() => setOpen(false)} href={route.href} className={`text-sm font-medium transition-colors hover:text-primary ${pathname === route.href ? 'text-primary' : 'text-muted-foreground'}`}>
                                {route.name}
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            <NavigationMenu className="hidden sm:block">
                <NavigationMenuList className="flex flex-col sm:flex-row gap-4">
                    {routes.map((route) => (
                        <NavigationMenuItem key={route.name}>
                            <NavigationMenuLink asChild>
                                <Link prefetch href={route.href} className={`text-sm font-medium transition-colors hover:text-primary ${pathname === route.href ? 'text-primary' : 'text-muted-foreground'}`}>
                                    {route.name}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <ModeToggle />
        </header>
    )
};