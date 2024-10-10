import { getExperiences } from "@/actions/getExperiences";
import { checkAuth } from "@/auth/auth";
import { createClientServer } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const supabase = createClientServer();
    const auth = await checkAuth(supabase);
    if (auth) {
        return auth;
    }
    const { title, duration, description, location, type, technologies, extraLinks, image, landingDescription } = await request.json();
    const { data, error } = await supabase.from("experiences").insert({ title, duration, description, location, type, technologies, extraLinks, image, landingDescription });
    if (error) throw error;
    

    return NextResponse.json(data);
}