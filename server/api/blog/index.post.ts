import { defineEventHandler } from 'h3'
import { PostCreateInputObjectSchema } from '~/prisma/generated/schemas'
import prisma from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const parsed = PostCreateInputObjectSchema.safeParse(body)

    if (!parsed.success) {
        throw createError({
            statusCode: 400,
            message: "Validation échouée",
            data: parsed.error.flatten().fieldErrors
        });
    }

    const post = await prisma.post.create({
        data: parsed.data
    })

    return post
})
