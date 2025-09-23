import { createClientServer } from "@/lib/supabase";
import { Converter } from "showdown"

export async function getLandingText(): Promise<string> {
    const supabase = createClientServer()
    const converter = new Converter()

    const {data, error} = await supabase.from("configuration").select("landing_text,birth_year,exp_year").single()

    if(error) {
        throw error
    }

    const todayYear = new Date().getFullYear()

    const preformatted_text = data.landing_text
        .replace('{$myAge}', todayYear - data.birth_year)
        .replace('{$myExperienceYears}', todayYear - data.exp_year)

    return converter.makeHtml(preformatted_text)
}