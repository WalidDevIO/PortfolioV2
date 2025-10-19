<template>
    <GlobalCards :cards="formations ?? []" />
</template>

<script setup lang="ts">
import type { Tables } from '~/types/database.types';

type Formation = Tables<'formations'>;
const { data: formations } = useFetch<Formation[]>(`http://localhost:3000/api/formations`)
</script>
