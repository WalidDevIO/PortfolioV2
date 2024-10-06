import { createClientServer } from "@/lib/supabase";
import { Formation } from "@/types/formation";

export async function getFormations(): Promise<Formation[]> {
    const supabase = createClientServer()

    const { data, error } = await supabase.from("formations").select("*").order("created_at", {ascending: false})

    if(error) {
        throw error
    }

    return data
}