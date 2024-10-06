import { createClientServer } from "@/lib/supabase";
import { checkAuth } from "@/auth/auth";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const supabase = createClientServer();
    const auth = await checkAuth(supabase);
    if (auth) {
        return auth;
    }
    const { title, duration, location, description, image, landingDescription, technologies, extraLinks, littleDescription } = await request.json();
    const { data, error } = await supabase.from("projects").update({ title, duration, location, description, image, landingDescription, technologies, extraLinks, littleDescription }).eq("id", params.id);
    if (error) throw error;
    return NextResponse.json(data);
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const supabase = createClientServer();
    const auth = await checkAuth(supabase);
    if (auth) {
        return auth;
    }
    const { data, error } = await supabase.from("projects").select("*").eq("id", params.id).maybeSingle();
    if (error) throw error;
    return NextResponse.json(data);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const supabase = createClientServer();
    const auth = await checkAuth(supabase);
    if (auth) {
        return auth;
    }
    const { data, error } = await supabase.from("projects").delete().eq("id", params.id);
    if (error) throw error;
    return NextResponse.json(data);
}