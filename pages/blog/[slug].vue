<template>
    <div class="container mx-auto p-4" v-if="post">
        <h1 class="text-4xl font-bold mb-4">{{post.title}}</h1>
        <p class="text-gray-600 mb-4">Publié le {{ new Date(post.createdAt).toLocaleDateString("fr-FR") }}</p>
        <div class="prose dark:prose-dark inline w-80" v-html="converter.makeHtml(post.content)" />
    </div>
    <div v-else>
        Le post que vous recherchez n'existe pas :'(
        <NuxtLink to="/blog">Revenir sur le blog</NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { z } from "zod"
import type { Post } from "@prisma/client"
import { Converter } from "showdown";

const converter = new Converter({
    tables: true,
    ellipsis: true,
});

const route = useRoute()
const router = useRouter()

const routeParamsSchema = z.object({
    slug: z.string()
})

const parsedParams = routeParamsSchema.safeParse(route.params)

if(!parsedParams.success) {
    throw createError({statusCode: 400, statusMessage: "Paramètres de route incorrects"})
}

const { data: post } = useFetch<Post>(`http://localhost:3000/api/blog/${parsedParams.data.slug}`)

</script>