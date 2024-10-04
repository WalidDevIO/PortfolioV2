import { checkAuth } from "@/auth/auth";
import { createClientServer } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const supabase = createClientServer();
    const auth = await checkAuth(supabase);
    if (auth) {
        return auth;
    }
    const { title, duration, location, description, image, technologies, extraLinks, landingDescription, speciality } = await request.json();
    const { data, error } = await supabase.from("formations").insert({ title, duration, location, description, image, technologies, extraLinks, landingDescription, speciality });
    if (error) throw error;
    return NextResponse.json(data);
}

export async function GET() {
    const supabase = createClientServer();
    const { data, error } = await supabase.from("formations").select("*").order("created_at", { ascending: false });
    if (error) throw error;
    return NextResponse.json(data);
}