<template>
    <GlobalCards :cards="experiences ?? []" />
</template>

<script setup lang="ts">
import type { Experience } from '@prisma/client';

const { data: experiences } = useFetch<Experience[]>(`http://localhost:3000/api/experiences`)
</script>