import { createClientServer } from "@/lib/supabase";
import { checkAuth } from "@/auth/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const supabase = createClientServer();
    const auth = await checkAuth(supabase);
    if (auth) {
        return auth;
    }
    const { title, duration, location, description, image, landingDescription, technologies, extraLinks, littleDescription } = await request.json();
    const { data, error } = await supabase.from("projects").insert({ title, duration, location, description, image, landingDescription, technologies, extraLinks, littleDescription });
    if (error) throw error;
    return NextResponse.json(data);
}