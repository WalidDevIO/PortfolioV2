<template>
    <div class="container mx-auto p-4">
        <h1 class="text-4xl font-bold mb-4">{{data?.title}}</h1>
        <p class="text-gray-600 mb-4">Publié le {{ data?.createdAt.toLocaleDateString("fr-FR") }}</p>
        <div v-html="data?.content" class='prose dark:prose-dark inline w-80' />
    </div>
</template>

<script setup lang="ts">
import { z } from "zod"
import prisma from "@/server/utils/prisma"

const route = useRoute()
const router = useRouter()

const routeParamsSchema = z.object({
    slug: z.string()
})

const parsedParams = routeParamsSchema.safeParse(route.params)

if(!parsedParams.success) {
    throw createError({statusCode: 400, statusMessage: "Paramètres de route incorrects"})
}

const { data } = await useAsyncData(`post.${route.params.slug}`, async () => {
    return await prisma.post.findFirst({
        where: {
            slug: parsedParams.data.slug,
            published: true
        }
    })
})

onMounted(() => {
    if(!data.value) router.push("/")
})
</script>