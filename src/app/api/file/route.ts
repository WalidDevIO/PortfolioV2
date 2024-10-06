import { checkAuth } from "@/auth/auth";
import { createClientServer } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const supabase = createClientServer();

    const auth = await checkAuth(supabase);
    if (auth) {
        return auth;
    }

    const formData = await req.formData();
    const fileName = formData.get("fileName") as string;
    const file = formData.get("file") as File;
    if (!file || !fileName) {
        return NextResponse.json({ error: "Fichier ou nom de fichier manquant" }, { status: 400 });
    }

    const fileExtension = file.name.split(".").pop();
    const filePath = `${fileName}.${fileExtension}`;
    const fileBuffer = await file.arrayBuffer();

    try {
        const { error } = await supabase.storage
            .from('files')
            .upload(filePath, fileBuffer, {
                contentType: file.type,
            })

        if (error) throw error

        return NextResponse.json({ message: 'Fichier ajouté avec succès' })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: "Erreur lors de l'ajout du fichier" }, { status: 500 })
    }
}

export async function GET() {
    const supabase = createClientServer();

    const auth = await checkAuth(supabase);
    if (auth) {
        return auth;
    }

    const { data, error } = (await supabase.storage.from('files').list());
    if (error) {
        return NextResponse.json({ error: 'Error fetching files' }, { status: 500 })
    }

    return NextResponse.json({ data })
}