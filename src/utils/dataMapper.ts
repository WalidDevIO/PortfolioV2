import { Global, Link } from "@/types/global";
import { SupabaseClient } from "@supabase/supabase-js";
import { Converter } from "showdown";


export function dataMapper<T extends Global>(data: T[] | null, supabase: SupabaseClient): T[] {
    if (data) {

        const converter = new Converter();

        return data.map((c: T) => {
            const extraLinks = c.extraLinks?.map((link: Link) => {
                if (link.url.startsWith("http")) return link
                return {
                    ...link,
                    url: supabase.storage.from("files").getPublicUrl(link.url).data.publicUrl
                }
            })

            const image = c.image.startsWith("http") || c.image.startsWith("data:image")
                ? c.image
                : supabase.storage.from("files").getPublicUrl(c.image).data.publicUrl

            const description = converter.makeHtml(c.description)

            return {
                ...c,
                image,
                extraLinks,
                description
            }
        })
    }

    throw new Error("dataMapper: Data is null")
}