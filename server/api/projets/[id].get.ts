import { serverSupabaseClient } from '#supabase/server'
import { idValidator } from '~/generated/typia'

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
    const params = idValidator(event.context.params)
    if(!params.success) {
        throw createError({statusCode: 404, message: "Projet introuvable"})
    }

    const supabase = await serverSupabaseClient(event)
    const id = asNumber(params.data.id)
    if(id === null) {
        throw createError({statusCode: 404, message: "Projet introuvable"})
    }

    const { data: projet, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single()

   if (error) throw createError({ statusCode: 404, message: "Projet introuvable"})

    return projet
})