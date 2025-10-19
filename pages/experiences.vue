<template>
    <GlobalCards :cards="experiences ?? []" />
</template>

<script setup lang="ts">
import type { Tables } from '~/types/database.types';

const { data: experiences } = useFetch<Tables<'experiences'>[]>(`http://localhost:3000/api/experiences`)
</script>