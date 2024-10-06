import { FileList } from "@/components/files/FileList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FilesPage() {
    return <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center gap-4">
            <h1 className="text-2xl font-bold">Fichiers</h1>
            <Button asChild><Link href="/admin/files/upload">Ajouter un fichier</Link></Button>
        </div>
        <FileList />
    </div>
}