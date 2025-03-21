<template>
    <component :is="component" v-bind="forwarded">
        <slot/>
    </component>
</template>

<script setup lang="ts">
import { type CredenzaRootProps, type CredenzaRootEmits } from './types';
import { useForwardPropsEmits } from 'reka-ui'
import { useMediaQuery } from '@/composables/useMediaQuery';
import { Dialog } from '@/components/ui/dialog';
import { Drawer } from '@/components/ui/drawer';

const { isDesktop } = useMediaQuery("(min-width: 768px)");

const component = computed(() => isDesktop.value ? Dialog : Drawer)

const props = defineProps<CredenzaRootProps>()
const emits = defineEmits<CredenzaRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>