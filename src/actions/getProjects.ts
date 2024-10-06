import { createClientServer } from "@/lib/supabase";
import { Projet } from "@/types/projet";

export async function getProjects(): Promise<Projet[]> {
    const supabase = createClientServer()
    const { data, error } = await supabase.from("projects").select("*").order("created_at", {ascending: false})

    if(error) {
        throw error
    }

    return data;
}