<template>
    <div class="container mx-auto p-4">
        <h1 class="text-4xl font-bold mb-4">
            Blog
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card v-for="post in data"
                class="p-4 rounded-lg shadow border-2 border-dark dark:border-white bg-transparent hover:scale-[1.05] cursor-pointer duration-500">
                <NuxtLink :href="`/blog/${post.slug}`">
                    <CardHeader>
                        <CardTitle class="text-4xl font-bold mb-4 text-dark dark:text-white">{{ post.title }}</CardTitle>
                    </CardHeader>
                    <CardContent class="flex flex-col align-center">
                        <p class="text-dark text-sm dark:text-white mb-2">Publié le {{ post.createdAt.toLocaleDateString("fr-FR") }}</p>
                        <Button variant="outline" class="font-bold">Lire l'article</Button>
                    </CardContent>
                </NuxtLink>
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">
import prisma from "@/server/utils/prisma"

const {data} = await useAsyncData("posts", async () => {
    return await prisma.post.findMany({
        where: {
            published: true
        }
    });
})
</script>