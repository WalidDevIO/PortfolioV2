import { Contact } from "@/types/contact";
import { Experience } from "@/types/experience";
import { Formation } from "@/types/formation";
import { Projet } from "@/types/projet";
import { createClientServer } from "@/lib/supabase";
import { Skill } from "@/types/skill";

const supabase = createClientServer();

export async function getContact(): Promise<Contact> {
    const { data, error } = await supabase.from("contact").select("*").limit(1).maybeSingle();
    if (error) throw error;
    return data as Contact;
}

export async function getFormations(): Promise<Formation[]> {
    const { data, error } = await supabase.from("formations").select("*").order("created_at", { ascending: false });
    if (error) throw error;
    return data as Formation[];
}

export async function getExperiences(): Promise<Experience[]> {
    const { data, error } = await supabase.from("experiences").select("*").order("created_at", { ascending: false });
    if (error) throw error;
    return data as Experience[];
}

export async function getProjects(): Promise<Projet[]> {
    const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
    if (error) throw error;
    return data as Projet[];
}

export async function getSkills(): Promise<Skill[]> {
    const { data, error } = await supabase.from("skills").select("*");
    if (error) throw error;
    return data as Skill[];
}

export async function getLandingLast(): Promise<{experience: Experience, formation: Formation, project: Projet}> {
    const experience = await supabase.from("experiences").select("*").order("created_at", { ascending: false }).limit(1).maybeSingle();
    const formation = await supabase.from("formations").select("*").order("created_at", { ascending: false }).limit(1).maybeSingle();
    const project = await supabase.from("projects").select("*").order("created_at", { ascending: false }).limit(1).maybeSingle();
    if(project.error || formation.error || experience.error) {
        console.error(project.error, formation.error, experience.error);
        throw new Error("Error fetching data");
    }

    return {
        experience: experience.data,
        formation: formation.data,
        project: project.data
    }
}