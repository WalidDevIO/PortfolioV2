import { createClientServer } from "@/lib/supabase"
import { Post } from "@/types/post"
import { Converter } from "showdown"

export async function getPosts(page: number): Promise<{ posts: Post[] }> {
    const supabase = createClientServer()

    const start = page * 6

    const { data, error } = await supabase.from("blog").select("*").eq("published", true).order("created_at", {ascending: false}).range(start, start + 6)

    if(error) {
        throw error
    }
    
    return {
        posts: data as Post[],
    }
}

export async function getPost(slug: string): Promise<{ post: Post | undefined }> {
    const supabase = createClientServer()

    const { data , error } = await supabase.from("blog").select("*").eq("published", true).eq("slug", slug)

    if(error) {
        throw error
    }

    const converter = new Converter({
        tables: true,
        ellipsis: true
    });

    const post = data[0] as Post|undefined
    if(post) {
        post.content = converter.makeHtml(post.content)
        post.content = post.content.replace(/<img[^>]+src=["']([^"']+)["']/g, (match, src) => {
            if (!src.startsWith("http") && !src.startsWith("data:image")) {
                const publicUrl = supabase.storage.from("files").getPublicUrl(src).data.publicUrl;
                return match.replace(src, publicUrl);
            }
            return match;
        });
    }

    return {
        post: data[0] as Post|undefined,
    }
}

export async function getPostById(id: string): Promise<{post: Post | undefined}> {
    const supabase = createClientServer()

    const { data: post, error } = await supabase.from("blog").select("*").eq("id", id).maybeSingle()

    if(error) throw error

    return {
        post
    }
}

export async function createPost(post: Post) {
    const supabase = createClientServer()

    const { error } = await supabase.from("blog").insert(post)

    if(error) {
        throw error
    }
}

export async function updatePost(post: Post) {
    const supabase = createClientServer()

    const { error } = await supabase.from("blog").update(post).eq("id", post.id)

    if(error) {
        throw error
    }
}

export async function getAllPosts() {

    const supabase = createClientServer()

    const { data , error } = await supabase.from("blog").select("*").order("created_at", {ascending: false})

    if(error) {
        throw error
    }

    return {
        posts: data as Post[],
    }

}

export async function getLastPost() {

    const supabase = createClientServer()

    const { data, error } = await supabase.from("blog").select("*").eq("published", true).order("created_at", {ascending: false}).limit(1).single();

    if(error) {
        throw error
    }

    return data as Post
}

//TODO: Pagination