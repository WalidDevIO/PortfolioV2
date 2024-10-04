import { NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase";

export async function GET() {
    const supabase = createClientServer();
    const { data, error } = await supabase.from("contact").select("*");
    if (error) {
        return NextResponse.error();
    }
    return NextResponse.json(data);
}