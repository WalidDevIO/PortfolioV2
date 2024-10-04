import { checkAuth } from "@/auth/auth";
import { createClientServer } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";
import { Experience } from "@/types/experience";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const supabase = createClientServer();
    const auth = await checkAuth(supabase);
    if(auth) {
        return auth;
    }
    const { data, error } = await supabase.from("experiences").select("*").eq("id", params.id).maybeSingle();
    if(data == null) return NextResponse.json(null, {status: 404})
    if (error) throw error;
    return NextResponse.json(data);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const supabase = createClientServer();
    const auth = await checkAuth(supabase);
    if(auth) {
        return auth;
    }
    const { title, duration, location, description, image, technologies, extraLinks, landingDescription, type } = await request.json();
    const { data, error } = await supabase
        .from("experiences")
        .update({title, duration, location, description, image, technologies: JSON.stringify(technologies), extraLinks: JSON.stringify(extraLinks), landingDescription, type})
        .eq("id", params.id);
    if (error) throw error;
    return NextResponse.json(data);
}