import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const { data, error } = await (await serverSupabaseClient(event))
        .from('blog')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })

    if (error) throw createError({ statusCode: 500, message: error.message })

    return data
})