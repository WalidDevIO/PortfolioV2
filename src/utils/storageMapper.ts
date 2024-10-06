import { Global, Link } from "@/types/global";
import { SupabaseClient } from "@supabase/supabase-js";

export function urlMap<T extends Global>(data: T[] | null, supabase: SupabaseClient): T[] {
    if (data) {
        return data.map((exp: T) => {
            const extraLinks = exp.extraLinks?.map((link: Link) => {
                if (link.url.startsWith("http")) return link
                return {
                    ...link,
                    url: supabase.storage.from("files").getPublicUrl(link.url).data.publicUrl
                }
            })

            const image = exp.image.startsWith("http") || exp.image.startsWith("data:image")
                ? exp.image
                : supabase.storage.from("files").getPublicUrl(exp.image).data.publicUrl

            return {
                ...exp,
                image,
                extraLinks
            }
        })
    }

    throw new Error("urlMap: Data is null")
}