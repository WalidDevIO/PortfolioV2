import { serverSupabaseClient } from '#supabase/server'
import { projectInsertValidator } from '~/generated/typia'

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient(event)
    const body = await readBody(event)
    const parsed = projectInsertValidator(body)

    if (!parsed.success) {
        throw createError({
            statusCode: 400,
            message: "Validation échouée",
            data: parsed.errors
        });
    }

    const {data: projet, error} = await supabase.from('projects').insert(parsed.data)
    if (error) throw createError({ statusCode: 500, message: error.message })

    return projet
})
