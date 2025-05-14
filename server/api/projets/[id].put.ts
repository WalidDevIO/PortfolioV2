// server/api/projets/[id].put.ts
import { H3Event } from 'h3'
import prisma from '~/server/utils/prisma'
import { ProjetUpdateInputObjectSchema } from '~/prisma/generated/schemas'
import { checkAuth } from '~/server/utils/auth'
import { z } from 'zod'

const paramsSchema = z.object({
    id: z.string()
})

export default defineEventHandler(async (event: H3Event) => {
    await checkAuth(event);

    const params = paramsSchema.safeParse(event.context.params)
    if(!params.success) {
        throw createError({statusCode: 404, message: "Page introuvable"})
    }
    const { id } = params.data;
    const experienceId = parseInt(id, 10);

    if (isNaN(experienceId)) {
        throw createError({
            statusCode: 400,
            message: 'ID invalide fourni'
        });
    }

    const body = await readBody(event);
    const parseResult = ProjetUpdateInputObjectSchema.safeParse(body);

    if (!parseResult.success) {
        throw createError({
            statusCode: 400,
            message: "Validation échouée",
            data: parseResult.error.flatten().fieldErrors
        });
    }

    const updatedProjet = await prisma.projet.update({
        where: { id: experienceId },
        data: parseResult.data
    });

    return updatedProjet;
});
