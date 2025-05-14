<template>
    <GlobalCards :cards="projects ?? []" /> 
</template>

<script setup lang="ts">
import type { Projet } from '@prisma/client';

const { data: projects } = useFetch<Projet[]>(`http://localhost:3000/api/projets`)
</script>
