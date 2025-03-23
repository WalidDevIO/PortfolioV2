<template>
    <div
    class="flex flex-col min-h-screen p-2 sm:p-4 md:p-8 max-w-full w-full font-[family-name:var(--font-geist-sans)]">
        <Navbar />
        <main class="flex-grow flex flex-col items-center justify-center gap-8 z-10">
            <slot />
        </main>
        <footer class="mt-8 text-center">
            EL OUAZIZI Walid - {{ new Date().getFullYear() }} ©
        </footer>
    </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import { tsParticles } from "@tsparticles/engine";
import { useHead, useColorMode } from "#imports";
import Navbar from "~/components/general/navbar.vue";

const colorMode = useColorMode()

useHead({
    htmlAttrs: { lang: "fr", class: colorMode.value },
    title: "Portfolio - Walid EL OUAZIZI",
    meta: [
        { name: "description", content: "Portfolio de Walid EL OUAZIZI" }
    ]
});

const initParticles = () => {
    loadStarsPreset(tsParticles).then(() => {
        tsParticles.load({
            id: "stars",
            options: {
                preset: "stars"
            }
        });
    });
}

const destroyParticles = () => {
    tsParticles.dom().forEach((container) => container.destroy());
}

const handleThemeChange = () => {
    (colorMode.value === "dark" ? initParticles : destroyParticles)()
}

watch(colorMode, handleThemeChange, {
    immediate: true
});
</script>
