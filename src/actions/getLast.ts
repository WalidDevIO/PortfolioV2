import { createClientServer } from "@/lib/supabase";

export async function getLast() {
    const supabase = createClientServer();
    const lastExperience = await supabase.from("experiences").select("*").order("created_at", { ascending: false }).limit(1).single();
    const lastProject = await supabase.from("projects").select("*").order("created_at", { ascending: false }).limit(1).single();
    const lastFormation = await supabase.from("formations").select("*").order("created_at", { ascending: false }).limit(1).single();
    
    if (lastExperience.error || lastProject.error || lastFormation.error) {
        console.error(lastExperience.error, lastProject.error, lastFormation.error);
    }

    return {
        lastExperience: lastExperience.data,
        lastProject: lastProject.data,
        lastFormation: lastFormation.data
    };
}