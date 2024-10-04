"use client"

import { loadStarsPreset } from '@tsparticles/preset-stars';
import { tsParticles } from '@tsparticles/engine';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export default function StarrySky() {
    const { theme } = useTheme();

    useEffect(() => {
        const initParticles = async () => {
            await loadStarsPreset(tsParticles);
            await tsParticles.load({
                id: "tsparticles",
                options: {
                    preset: "stars",
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

        if(theme === "system") {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);
        }

        return () => {
            tsParticles.dom().forEach((container) => container.destroy());
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange);
        };
    }, [theme]);

    return <div id="tsparticles" />;
}