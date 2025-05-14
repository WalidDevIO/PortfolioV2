import { type Post } from "@prisma/client"
import { z } from "zod"

const paramsSchema = z.object({
    id: z.string()
})

const isNumber = (value: any) => {
    value = parseInt(value)
    return isFinite(value) && !isNaN(value)
}

export default defineEventHandler(async (event) => {
    const params = paramsSchema.safeParse(event.context.params)
    if(!params.success) {
        throw createError({statusCode: 404, message: "Page introuvable"})
    }

    let post: Post|null = null

    if(isNumber(params.data.id)) {
        await checkAuth(event);
        post = await prisma.post.findFirst({
            where: {
                id: parseInt(params.data.id)
            }
        })
    } else {
        post = await prisma.post.findFirst({
            where: {
                published: true,
                slug: params.data.id
            }
        })
    }

   if (!post) throw createError({ statusCode: 404, message: "Page introuvable"})

    return post
})