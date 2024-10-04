import { createClientServer } from "@/lib/supabase";
import { checkAuth } from "@/auth/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const supabase = createClientServer();
    const auth = await checkAuth(supabase);
    if(auth) {
        return auth;
    }
    const { name, level, description } = await request.json();
    const { data, error } = await supabase.from("skills").insert({ name, level, description });
    if (error) throw error;
    return NextResponse.json(data);
}