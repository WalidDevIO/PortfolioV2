"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { loadStarsPreset } from '@tsparticles/preset-stars';
import { tsParticles } from '@tsparticles/engine';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>
        <ThemeLogic>
            {children}
        </ThemeLogic>
    </NextThemesProvider>
}

function ThemeLogic({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme();

    useEffect(() => {
        const initParticles = async () => {
            await loadStarsPreset(tsParticles);
            await tsParticles.load({
                id: "tsparticles",
                options: {
                    preset: "stars",
                    particles: {
                        color: {
                            value: "#5e646f",
                        },
                    },
                },
            });
        };

        const handleThemeChange = () => {
            if (theme === 'dark' || theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                initParticles();
            } else {
                tsParticles.dom().forEach((container) => container.destroy());
            }
        };

        handleThemeChange();

        if (theme === "system") {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);
        }

        return () => {
            tsParticles.dom().forEach((container) => container.destroy());
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange);
        };
    }, [theme]);


    return children;
}