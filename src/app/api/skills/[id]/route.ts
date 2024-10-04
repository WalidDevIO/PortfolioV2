import { createClientServer } from "@/lib/supabase";
import { checkAuth } from "@/auth/auth";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
    const supabase = createClientServer();
    const auth = await checkAuth(supabase);
    if(auth) {
        return auth;
    }
    const { name, level, description } = await request.json();
    const { data, error } = await supabase.from("skills").update({ name, level, description }).eq("id", params.id);
    if (error) throw error;
    return NextResponse.json(data);
}

export async function GET(request: NextRequest, { params }: { params: { id: number } }) {
    const supabase = createClientServer();
    const auth = await checkAuth(supabase);
    if(auth) {
        return auth;
    }
    const { data, error } = await supabase.from("skills").select("*").eq("id", params.id).maybeSingle();
    if(data == null) return NextResponse.json(null, {status: 404})
    if (error) throw error;
    return NextResponse.json(data);
}