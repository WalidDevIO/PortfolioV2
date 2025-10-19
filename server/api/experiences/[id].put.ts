import { serverSupabaseClient } from '#supabase/server';
import { experienceUpdateValidator, idValidator } from '~/generated/typia';

export default defineEventHandler(async (event) => {
    const params = idValidator(event.context.params)
    if(!params.success) {
        throw createError({statusCode: 404, message: "Expérience introuvable"})
    }
    const { id } = params.data;
    const supabase = await serverSupabaseClient(event);

    const { data: experience, error } = await supabase
        .from("experiences")
        .select("*")
        .eq("id", parseInt(id, 10))
        .single();

    if (error || !experience) throw createError({ statusCode: 404, message: "Expérience introuvable"});

    const body = await readBody(event);
    const parseResult = experienceUpdateValidator(body);

    if (!parseResult.success) {
        throw createError({
            statusCode: 400,
            message: "Validation échouée",
            data: parseResult.errors
        });
    }

    const {data: updatedExperience, error: updateError} = await supabase.from("experiences").update(parseResult.data).select().eq("id", parseInt(id, 10));

    if (updateError) throw createError({ statusCode: 500, message: "Erreur lors de la mise à jour de l'expérience" });

    return updatedExperience?.[0];
});
