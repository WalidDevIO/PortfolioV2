import { createClientServer } from "@/lib/supabase";
import { Experience } from "@/types/experience";
import { PostgrestError } from "@supabase/supabase-js";
import { dataMapper } from "@/utils/dataMapper";    

interface Response {
    data: Experience[] | null;
    error: PostgrestError | null;
}

export async function getExperiences(): Promise<Experience[]> {
    const supabase = createClientServer()

    const { data, error } = await supabase.from("experiences").select("*").order("created_at", { ascending: false }) as Response

    if (error) {
        throw error
    }

    return dataMapper(data, supabase)
}