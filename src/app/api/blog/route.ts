import { Post } from "@/types/post";
import { createClientServer } from "@/lib/supabase";
import { checkAuth } from "@/auth/auth";
import { createPost, getAllPosts } from "@/actions/blog";
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

export async function GET() {
    const supabase = createClientServer();
    const auth = await checkAuth(supabase);
    if (auth) {
        return auth;
    }
    const { posts } = await getAllPosts();
    return NextResponse.json({posts}, {status: 200});
}