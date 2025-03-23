<template>
    <div class="space-y-4">
        <p><strong>Email :</strong> {{data?.mail}}</p>
        <p><strong>Localisation :</strong> {{data?.location}}</p>
    </div>
    <div class="mt-6 flex flex-col sm:flex-row gap-4">
        <Button asChild>
            <a class="w-full" :href="`mailto:${data?.mail}`">
                <Mail class="mr-2 h-4 w-4" /> Contactez-moi maintenant !
            </a>
        </Button>
        <Button variant="outline" asChild>
            <a class="w-full" :href="`${data?.linkedin}`" target="_blank" rel="noopener noreferrer">
                <Linkedin class="mr-2 h-4 w-4" /> Connectons-nous !
            </a>
        </Button>
        <Button variant="outline" asChild>
            <a :href="`${data?.github}`" target="_blank" rel="noopener noreferrer">
                <Github class="mr-2 h-4 w-4" /> Découvrez mes projets !
            </a>
        </Button>
    </div>
</template>

<script setup lang="ts">
import prisma from "@/server/utils/prisma"
import {
    Mail,
    Linkedin,
    Github
} from "lucide-vue-next"

const { data } = await useAsyncData("configuration", async () => {
    return await prisma.configuration.findFirst();
})
</script>