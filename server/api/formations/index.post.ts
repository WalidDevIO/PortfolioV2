// server/api/formations/index.post.ts
import { H3Event } from 'h3'
import prisma from '~/server/utils/prisma'
import { FormationCreateInputObjectSchema } from '~/prisma/generated/schemas'
import { checkAuth } from '~/server/utils/auth'

export default defineEventHandler(async (event: H3Event) => {
    await checkAuth(event);

    const body = await readBody(event);
    const parseResult = FormationCreateInputObjectSchema.safeParse(body);

    if (!parseResult.success) {
        throw createError({
            statusCode: 400,
            message: "Validation échouée",
            data: parseResult.error.flatten().fieldErrors
        });
    }

    return await prisma.formation.create({
        data: parseResult.data
    });
});
