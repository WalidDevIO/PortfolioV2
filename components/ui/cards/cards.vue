<template>
  <div class="flex flex-wrap flex-row justify-center gap-4">
    <Credenza v-for="(card, index) in formattedCards" :key="index">
      <CredenzaTrigger as-child>
        <Card class="w-48 h-48 flex flex-col justify-center items-center hover:scale-[1.05] cursor-pointer duration-500">
          <CardContent :class="['flex flex-col items-center p-0 h-full gap-3', isProjet(card) ? 'mt-8' : 'mt-10']">
            <div class="flex flex-col items-center gap-3 w-full">
              <NuxtImg
                :src="card.image ?? ''"
                :alt="card.title ?? 'alt image'"
                class="rounded-full object-cover w-[65px] h-[65px]"
                width="65"
                height="65"
              />
              <CardTitle class="text-sm text-center">{{ card.title }}</CardTitle>
            </div>
            <template v-if="isProjet(card) && card.littleDescription">
              <CredenzaDescription class="text-sm text-center">
                {{ card.littleDescription }}
              </CredenzaDescription>
            </template>
          </CardContent>
        </Card>
      </CredenzaTrigger>

      <CredenzaContent class="flex flex-col">
        <CredenzaHeader>
          <CredenzaTitle class="flex flex-row flex-wrap justify-around items-center mb-1 md:mb-4">
            {{ card.title }}
            <NuxtImg
              :src="card.image ?? ''"
              :alt="card.title ?? 'alt image'"
              class="relative rounded-full object-cover w-[35px] h-[35px] md:w-[45px] md:h-[45px] xl:w-[65px] xl:h-[65px]"
            />
          </CredenzaTitle>
          <CredenzaDescription>
            <div class="flex flex-col gap-1 md:gap-4 text-sm">
              <div v-if="isFormation(card) || isExperience(card)" class="flex flex-row gap-2 justify-center items-center font-bold text-center">
                <Badge>{{ isFormation(card) ? card.speciality : card.type }}</Badge>
              </div>
              <div class="flex flex-row gap-2 justify-center items-center font-bold">
                <MapPin /><Badge>{{ card.location }}</Badge>
              </div>
              <div class="flex flex-row gap-2 justify-center items-center font-bold">
                <CalendarDays /><Badge>{{ card.duration }}</Badge>
              </div>
            </div>
          </CredenzaDescription>
        </CredenzaHeader>

        <Separator class="mb-1" />

        <CredenzaBody>
          <div v-html="converter.makeHtml(card.description ?? '')" class="prose dark:prose-dark mb-4" />

          <template v-if="Array.isArray(card.technologies) && card.technologies.length">
            <div class="flex flex-col gap-4 mb-4">
              <span class="text-center font-bold">Technologies :</span>
              <div class="flex flex-wrap gap-2 justify-center">
                <Badge v-for="(tech, idx) in card.technologies" :key="idx">{{ tech }}</Badge>
              </div>
            </div>
          </template>

          <Separator v-if="Array.isArray(card.technologies) && card.technologies.length && Array.isArray(card.extraLinks) && card.extraLinks.length" class="mb-2" />

          <template v-if="!isProjet(card) && Array.isArray(card.extraLinks) && card.extraLinks.length">
            <div class="flex flex-col items-center gap-4 my-2">
              <template v-for="(file, idx) in card.extraLinks as (z.infer<typeof linkSchema>)[]" :key="idx">
                <Button v-if="!file.github" class="w-full" as-child>
                  <NuxtLink :to="file.url" target="_blank">{{ file.title }}</NuxtLink>
                </Button>
                <Button v-else class="w-full" as-child>
                  <NuxtLink :to="file.url" target="_blank">
                    <Github class="mr-2" />Voir sur GitHub
                  </NuxtLink>
                </Button>
              </template>
            </div>
          </template>

          <template v-if="isProjet(card)">
            <div class="flex flex-row gap-2 items-center my-2">
              <Button :disabled="!card.github" class="w-full" as-child>
                <NuxtLink :to="card.github ?? '#'" target="_blank">
                  <span class="flex flex-row gap-2 justify-center items-center">
                    <Github />
                    {{ card.github ? 'Voir sur GitHub' : 'Code privé' }}
                  </span>
                </NuxtLink>
              </Button>
            </div>
          </template>
        </CredenzaBody>
      </CredenzaContent>
    </Credenza>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { Tables } from '~/types/database.types'
import { MapPin, CalendarDays, Github } from 'lucide-vue-next'
import { Converter } from 'showdown'
import { z } from 'zod'

interface CardProjet extends Tables<'projects'> {
  github?: string
}

type Formation = Tables<'formations'>;
type Experience = Tables<'experiences'>;
type Projet = Tables<'projects'>;
type CardType = Experience | Formation | CardProjet | Projet

interface Props {
  cards: CardType[]
}

const props = defineProps<Props>()

const converter = new Converter({
    tables: true,
    ellipsis: true,
});

const isFormation = (card: CardType): card is Formation => 'speciality' in card
const isExperience = (card: CardType): card is Experience => 'type' in card
const isProjet = (card: CardType): card is CardProjet => 'littleDescription' in card

const linkSchema = z.object({
  title: z.string(),
  url: z.string(),
  github: z.boolean().optional()
})

const linkArraySchema = z.array(linkSchema)

const formattedCards = computed(() =>
  props.cards.map(card => {
    const links = linkArraySchema.safeParse(card.extraLinks)
    if (isProjet(card) && links.success) {
      return {
        ...card,
        github: links.data.find((link: z.infer<typeof linkSchema>) => link.github)?.url
      }
    }
    return card
  })
)
</script>
