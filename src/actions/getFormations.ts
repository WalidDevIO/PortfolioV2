import { createClientServer } from "@/lib/supabase";
import { Formation } from "@/types/formation";
import { urlMap } from "@/utils/storageMapper";
import { PostgrestError } from "@supabase/supabase-js";

interface Response {
    data: Formation[] | null;
    error: PostgrestError | null;
}

export async function getFormations(): Promise<Formation[]> {
    const supabase = createClientServer()

    const { data, error } = await supabase.from("formations").select("*").order("created_at", {ascending: false}) as Response

    if(error) {
        throw error
    }

    return urlMap(data, supabase)
}