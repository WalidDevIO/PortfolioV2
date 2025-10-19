import { serverSupabaseClient } from '#supabase/server';
import { formationUpdateValidator, idValidator } from '~/generated/typia';

export default defineEventHandler(async (event) => {
    const params = idValidator(event.context.params)
    if(!params.success) {
        throw createError({statusCode: 404, message: "Formation introuvable"})
    }
    const { id } = params.data;
    const supabase = await serverSupabaseClient(event);

    const { data: formation, error } = await supabase
        .from("formations")
        .select("*")
        .eq("id", parseInt(id, 10))
        .single();

    if (error || !formation) throw createError({ statusCode: 404, message: "Formation introuvable"});

    const body = await readBody(event);
    const parseResult = formationUpdateValidator(body);

    if (!parseResult.success) {
        throw createError({
            statusCode: 400,
            message: "Validation échouée",
            data: parseResult.errors
        });
    }

    const {data: updatedFormation, error: updateError} = await supabase.from("formations").update(parseResult.data).select().eq("id", parseInt(id, 10));

    if (updateError) throw createError({ statusCode: 500, message: "Erreur lors de la mise à jour de la formation" });

    return updatedFormation?.[0];
});
