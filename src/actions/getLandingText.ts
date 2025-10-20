import { createClientServer } from "@/lib/supabase";
import { getPlugins, Plugin } from "@/utils/landingTransformPlugins";
import { Converter } from "showdown"

export async function getLandingText(): Promise<string> {
    const supabase = createClientServer()
    const converter = new Converter()

    const {data, error} = await supabase.from("configuration").select("landing_text").single()

    if(error) {
        throw error
    }

    const plugins = await getPlugins(supabase);
    return converter.makeHtml(preformat_text(data.landing_text, plugins))
}

const preformat_text = (text: string, plugins: Plugin[]) => {
    plugins.forEach(({ regex, transform }) => {
        text = text.replaceAll(regex, transform)
    })
    return text
}