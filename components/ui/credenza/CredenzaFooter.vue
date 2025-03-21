<template>
    <component :is="component" v-bind="props">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { type CredenzaProps } from './types';
import { useMediaQuery } from '@/composables/useMediaQuery';
import { DialogFooter } from '@/components/ui/dialog';
import { DrawerFooter } from '@/components/ui/drawer';

const { isDesktop } = useMediaQuery("(min-width: 768px)");
const component = computed(() => isDesktop.value ? DialogFooter : DrawerFooter)

const props = defineProps<CredenzaProps>()
</script>