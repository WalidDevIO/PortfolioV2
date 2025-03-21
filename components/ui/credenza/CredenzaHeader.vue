<template>
    <component :is="component" v-bind="{ ...props, class: cn('mb-4', props.class) }">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { type CredenzaProps } from './types';
import { useMediaQuery } from '@/composables/useMediaQuery';
import { DialogHeader } from '@/components/ui/dialog';
import { DrawerHeader } from '@/components/ui/drawer';
import { cn } from '@/lib/utils';

const { isDesktop } = useMediaQuery("(min-width: 768px)");
const component = computed(() => isDesktop.value ? DialogHeader : DrawerHeader)

const props = defineProps<CredenzaProps>()
</script>