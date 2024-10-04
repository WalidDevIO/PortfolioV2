import { SupabaseClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function checkAuth(supabase: SupabaseClient) {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
        return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }
    return null;
}