import { createClientServer } from "@/lib/supabase";

export async function getFiles(): Promise<{name: string, id: string}[]> {
    const supabase = createClientServer();

    const { data, error } = await supabase.storage.from('files').list();
    if (error) {
        return [];
    }

    return data.map((file) => ({ name: file.name, id: file.id }));
}