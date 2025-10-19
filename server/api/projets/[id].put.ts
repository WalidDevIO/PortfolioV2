import { serverSupabaseClient } from '#supabase/server';
import { idValidator, projectUpdateValidator } from '~/generated/typia';

export default defineEventHandler(async (event) => {
    const params = idValidator(event.context.params)
    if(!params.success) {
        throw createError({statusCode: 404, message: "Projet introuvable"})
    }
    const { id } = params.data;
    const supabase = await serverSupabaseClient(event);

    const { data: projet, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", parseInt(id, 10))
        .single();

    if (error || !projet) throw createError({ statusCode: 404, message: "Projet introuvable"});

    const body = await readBody(event);
    const parseResult = projectUpdateValidator(body);

    if (!parseResult.success) {
        throw createError({
            statusCode: 400,
            message: "Validation échouée",
            data: parseResult.errors
        });
    }

    const {data: updatedProjet, error: updateError} = await supabase.from("projects").update(parseResult.data).select().eq("id", parseInt(id, 10));

    if (updateError) throw createError({ statusCode: 500, message: "Erreur lors de la mise à jour du projet" });

    return updatedProjet?.[0];
});
