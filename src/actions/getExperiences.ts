import { createClientServer } from "@/lib/supabase";
import { Experience } from "@/types/experience";

export async function getExperiences(): Promise<Experience[]> {
    const supabase = createClientServer()

    const { data, error } = await supabase.from("experiences").select("*").order("created_at", { ascending: false })

    if (error) {
        throw error
    }

    return data
}