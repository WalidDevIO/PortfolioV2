import { createPost, getPosts } from "@/actions/blog";
import { checkAuth } from "@/auth/auth";
import { createClientServer } from "@/lib/supabase";
import { Post } from "@/types/post";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const supabase = createClientServer();
    const auth = await checkAuth(supabase);
    if (auth) {
        return auth;
    }
    const body = await req.json() as Post;

    createPost(body);

    return NextResponse.json({status: "success"}, {status: 200});
}

export async function GET(req: NextRequest) {
    const page = req.nextUrl.searchParams.get("page") || "1";
    const { posts } = await getPosts(parseInt(page)-1);

    return NextResponse.json(posts);
}