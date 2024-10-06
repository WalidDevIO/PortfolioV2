import { createClientServer } from "@/lib/supabase";
import { Converter } from "showdown"

export async function getLandingText(): Promise<string> {
    const supabase = createClientServer()
    const converter = new Converter()

    const {data, error} = await supabase.from("configuration").select("landing_text").single()

    if(error) {
        throw error
    }

    return converter.makeHtml(data.landing_text)
}