import { createClientServer } from "@/lib/supabase"
import { Skill } from "@/types/skill"

export async function getSkills(): Promise<Skill[]> {
    const supabase = createClientServer()
    const {data, error} = await supabase.from("skills").select("*").order("level", { ascending: false })
    if(error) {
        throw error;
    }
    return data
}