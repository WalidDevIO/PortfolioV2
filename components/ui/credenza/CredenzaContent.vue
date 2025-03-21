<template>
    <component :is="component" v-bind="{ ...props, class: cn(isDesktop ? 'supports-[height:80cqh]:max-h-[80cqh] supports-[height:80svh]:max-h-[80svh]' : 'supports-[height:100cqh]:max-h-[100cqh] supports-[height:100svh]:max-h-[100svh]', props.class) }">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { type CredenzaProps } from './types';
import { useMediaQuery } from '@/composables/useMediaQuery';
import { DialogContent } from '@/components/ui/dialog';
import { DrawerContent } from '@/components/ui/drawer';
import { cn } from '@/lib/utils';

const { isDesktop } = useMediaQuery("(min-width: 768px)");
const component = computed(() => isDesktop.value ? DialogContent : DrawerContent)

const props = defineProps<CredenzaProps>()
</script>