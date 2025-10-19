import { serverSupabaseClient } from '#supabase/server'
import { formationInsertValidator } from '~/generated/typia'

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient(event)
    const body = await readBody(event)
    const parsed = formationInsertValidator(body)

    if (!parsed.success) {
        throw createError({
            statusCode: 400,
            message: "Validation échouée",
            data: parsed.errors
        });
    }

    const {data: formation, error} = await supabase.from('formations').insert(parsed.data)
    if (error) throw createError({ statusCode: 500, message: error.message })

    return formation
})
