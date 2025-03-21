<template>
    <component :is="component" v-bind="props">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { type CredenzaProps } from './types';
import { useMediaQuery } from '@/composables/useMediaQuery';
import { DialogDescription } from '@/components/ui/dialog';
import { DrawerDescription } from '@/components/ui/drawer';

const { isDesktop } = useMediaQuery("(min-width: 768px)");
const component = computed(() => isDesktop.value ? DialogDescription : DrawerDescription)

const props = defineProps<CredenzaProps>()
</script>