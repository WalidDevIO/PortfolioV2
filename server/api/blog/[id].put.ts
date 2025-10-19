import { serverSupabaseClient } from '#supabase/server';
import { type TablesUpdate } from "~/types/database.types";
import { blogUpdateValidator, idValidator } from '~/generated/typia';

export default defineEventHandler(async (event) => {
    const params = idValidator(event.context.params)
    if(!params.success) {
        throw createError({statusCode: 404, message: "Post introuvable"})
    }
    const { id } = params.data;
    const supabase = await serverSupabaseClient(event);

    const { data: post, error } = await supabase
        .from("blog")
        .select("*")
        .eq("id", parseInt(id, 10))
        .single();

    if (error || !post) throw createError({ statusCode: 404, message: "Post introuvable"});

    const body = await readBody(event);
    const parseResult = blogUpdateValidator(body);

    if (!parseResult.success) {
        throw createError({
            statusCode: 400,
            message: "Validation échouée",
            data: parseResult.errors
        });
    }

    const {data: updatedPost, error: updateError} = await supabase.from("blog").update(parseResult.data).select().eq("id", parseInt(id, 10));

    if (updateError) throw createError({ statusCode: 500, message: "Erreur lors de la mise à jour du post" });

    return updatedPost?.[0];
});