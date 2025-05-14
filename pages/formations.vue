<template>
    <GlobalCards :cards="formations ?? []" />
</template>

<script setup lang="ts">
import type { Formation } from '@prisma/client'

const { data: formations } = useFetch<Formation[]>(`http://localhost:3000/api/formations`)
</script>
