import { H3Event } from 'h3'
import prisma from '~/server/utils/prisma'
import { PostUpdateInputObjectSchema } from '~/prisma/generated/schemas'
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

    const post = await prisma.post.findFirst({
        where: {
            id: parseInt(id, 10)
        }
    })

    if (!post) throw createError({ statusCode: 404, message: "Page introuvable"})

    const body = await readBody(event);
    const parseResult = PostUpdateInputObjectSchema.safeParse(body);

    if (!parseResult.success) {
        throw createError({
            statusCode: 400,
            message: "Validation échouée",
            data: parseResult.error.flatten().fieldErrors
        });
    }

    const updatedPost = await prisma.post.update({
        where: { id: parseInt(id, 10) },
        data: parseResult.data
    });

    return updatedPost;
});