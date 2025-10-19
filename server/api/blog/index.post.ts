import { serverSupabaseClient } from '#supabase/server'
import { blogInsertValidator } from '~/generated/typia'

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient(event)
    const body = await readBody(event)
    const parsed = blogInsertValidator(body)

    if (!parsed.success) {
        throw createError({
            statusCode: 400,
            message: "Validation échouée",
            data: parsed.errors
        });
    }

    const {data: post, error} = await supabase.from('blog').insert(parsed.data)
    if (error) throw createError({ statusCode: 500, message: error.message })

    return post
})