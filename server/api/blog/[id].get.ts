import typia from "typia"
import { serverSupabaseClient } from '#supabase/server'

const asNumber = (value: string) => {
    let numberValue: number
    try {
        numberValue = parseInt(value, 10)
        return isFinite(numberValue) && !isNaN(numberValue) ? numberValue : null
    } catch {
        return null
    }
}

type GetParam = { id: string }

export default defineEventHandler(async (event) => {
    const params = typia.validate<GetParam>(event.context.params)
    if(!params.success) {
        throw createError({statusCode: 404, message: "Post introuvable"})
    }

    const supabase = await serverSupabaseClient(event)
    const id = asNumber(params.data.id)
    
    const { data: post, error } = await supabase
        .from("blog")
        .select("*")
        .eq(id !== null ? "id" : "slug", id ?? params.data.id)
        .single()

   if (error) throw createError({ statusCode: 404, message: "Post introuvable"})

    return post
})