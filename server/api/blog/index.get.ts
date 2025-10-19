import { supabase } from '~/server/utils/supabase'

export default defineEventHandler(async () => {
    const { data, error } = await supabase
        .from('blog')
        .select('*')
        .eq('published', true)
        .order('createdAt', { ascending: false })

    if (error) throw createError({ statusCode: 500, message: error.message })

    return data
})