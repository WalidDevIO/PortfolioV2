import { createClientServer } from "@/lib/supabase";
import { Projet } from "@/types/projet";
import { PostgrestError } from "@supabase/supabase-js";
import { urlMap } from "@/utils/storageMapper";

interface Response {
    data: Projet[] | null;
    error: PostgrestError | null
}

export async function getProjects(): Promise<Projet[]> {
    const supabase = createClientServer()
    const { data, error } = await supabase.from("projects").select("*").order("created_at", {ascending: false}) as Response

    if(error) {
        throw error
    }

    return urlMap(data, supabase)
}