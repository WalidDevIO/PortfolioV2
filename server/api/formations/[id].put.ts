// server/api/formations/[id].put.ts
import { H3Event } from 'h3'
import prisma from '~/server/utils/prisma'
import { FormationUpdateInputObjectSchema } from '~/prisma/generated/schemas'
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
    const formationId = parseInt(id, 10);

    if (isNaN(formationId)) {
        throw createError({
            statusCode: 400,
            message: 'ID invalide fourni'
        });
    }

    const body = await readBody(event);
    const parseResult = FormationUpdateInputObjectSchema.safeParse(body);

    if (!parseResult.success) {
        throw createError({
            statusCode: 400,
            message: "Validation échouée",
            data: parseResult.error.flatten().fieldErrors
        });
    }

    const updatedFormation = await prisma.formation.update({
        where: { id: formationId },
        data: parseResult.data
    });

    return updatedFormation;
});
