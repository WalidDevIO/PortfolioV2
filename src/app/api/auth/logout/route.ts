import { createClientServer } from "@/lib/supabase";
import { checkAuth } from "@/auth/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const supabase = createClientServer();

    const auth = await checkAuth(supabase);

    if(auth) {
        return auth;
    }

    const { error } = await supabase.auth.signOut();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: "Déconnexion réussie" });
}