import { createClientServer } from "@/lib/supabase"
import { Message } from "@/app/livre-dor/type"

export async function getMessages(): Promise<Message[]> {
    const supabase = createClientServer()

    const { data, error } = await supabase.from("livredor").select("*").eq("published", true).order("created_at", {ascending: false})

    if(error) {
        throw error
    }
    
    return data as Message[]
}

export async function getMessagesAdmin(): Promise<Message[]> {
    const supabase = createClientServer()

    const { data, error } = await supabase.from("livredor").select("*").order("created_at", { ascending: false })

    if (error) {
        throw error
    }

    return data as Message[]
}

export async function createMessage(message: Message) {
    const supabase = createClientServer()

    const { error } = await supabase.from("livredor").insert({...message, published: false})

    if(error) {
        throw error
    }
}

export async function acceptMessage(message: Message) {
    const supabase = createClientServer()

    const { error } = await supabase.from("livredor").update({...message, published: true}).eq("id", message.id)

    if(error) {
        throw error
    }
}

export async function deleteMessage(id: number) {
    const supabase = createClientServer()

    const { error } = await supabase.from("livredor").delete().eq("id", id)

    if(error) {
        throw error
    }
}