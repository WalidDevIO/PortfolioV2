<template>
    <div v-bind="{ ...props, class: cn('p-4 md:py-0 md:px-0 overflow-y-auto', props.class) }">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { type CredenzaProps } from './types';
import { cn } from '@/lib/utils';

const props = defineProps<CredenzaProps>()
</script>