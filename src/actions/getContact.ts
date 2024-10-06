import { createClientServer } from "@/lib/supabase"

export async function getContact(): Promise<{mail: string, location: string, github: string, linkedin: string}> {
    const supabase = createClientServer()

    const { data , error } = await supabase.from("configuration").select("mail, location, github, linkedin").single()

    if(error) {
        throw error
    }
    
    return {
        mail: data.mail,
        location: data.location,
        github: data.github,
        linkedin: data.linkedin
    }
}