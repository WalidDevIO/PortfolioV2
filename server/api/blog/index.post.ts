import typia from 'typia'
import { supabase, TablesInsert } from '~/server/utils/supabase'

type CreatePost = TablesInsert<'blog'>

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const parsed = typia.validate<CreatePost>(body)

    if (!parsed.success) {
        throw createError({
            statusCode: 400,
            message: "Validation échouée",
            data: parsed.errors
        });
    }

    const post = await supabase.from('blog').insert(parsed.data)
    if (post.error) throw createError({ statusCode: 500, message: post.error.message }) 

    return post
})