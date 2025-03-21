<template>
    <component :is="component" v-bind="props">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { type CredenzaProps } from './types';
import { useMediaQuery } from '@/composables/useMediaQuery';
import { DialogTitle } from '@/components/ui/dialog';
import { DrawerTitle } from '@/components/ui/drawer';

const { isDesktop } = useMediaQuery("(min-width: 768px)");
const component = computed(() => isDesktop.value ? DialogTitle : DrawerTitle)

const props = defineProps<CredenzaProps>()
</script>