import { createClientServer } from "@/lib/supabase";
import { Converter } from "showdown"

interface Plugin {
    regex: RegExp,
    plugin: (group: string) => string
}

const yearDiffPlugin = (group: string): string => {
    const todayYear = new Date().getFullYear()
    const year = parseInt(group.match(/[0-9]+/)![0])
    return (todayYear - year).toString()
}

const PLUGINS: Plugin[] = [
    {
        regex: /{yearDiff\([0-9]+\)}/g,
        plugin: yearDiffPlugin
    }
]

export async function getLandingText(): Promise<string> {
    const supabase = createClientServer()
    const converter = new Converter()

    const {data, error} = await supabase.from("configuration").select("landing_text").single()

    if(error) {
        throw error
    }

    return converter.makeHtml(preformat_text(data.landing_text))
}

const preformat_text = (text: string) => {
    let formatted_text = text
    PLUGINS.forEach(({regex, plugin}) => {
        formatted_text = formatted_text.replaceAll(regex, (match) => plugin(match))
    })
    return formatted_text
}