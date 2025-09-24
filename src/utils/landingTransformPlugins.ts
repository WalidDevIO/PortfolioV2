import { SupabaseClient } from "@/lib/supabase";

export interface Plugin {
    regex: RegExp,
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    transform: (match: string, ...args: any[]) => string
}

export const getPlugins = async (supabase: SupabaseClient): Promise<Plugin[]> => {

    return [
        {
            regex: /{yearDiff\(([0-9]+)\)}/g,
            transform: (_: string, year: string) => {
                const diff = new Date().getFullYear() - parseInt(year)
                if(diff === 0) return "moins d'un an"
                if(diff === 1) return "1 an"
                return `${diff} ans`
            }
        },
        {
            regex: /{currentYear}/g,
            transform: () => new Date().getFullYear().toString()
        },
    ]

}