import { checkAuth } from "@/auth/auth";
import { createClientServer } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const supabase = createClientServer();

    const auth = await checkAuth(supabase);
    if (auth) {
        return auth;
    }

    const { data, error } = await supabase.storage.from('files').remove([id]);

    console.log(data, error);

    if (error) {
        return NextResponse.json({ error: "Erreur lors de la suppression du fichier" }, { status: 500 });
    }

    return NextResponse.json({ message: "Fichier supprimé avec succès" });
}