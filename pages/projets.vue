<template>
    <GlobalCards :cards="projects ?? []" /> 
</template>

<script setup lang="ts">
import type { Tables } from '~/types/database.types';

const { data: projects } = useFetch<Tables<'projects'>[]>(`http://localhost:3000/api/projets`)
</script>
