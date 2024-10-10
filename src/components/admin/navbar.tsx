import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navbar() {
    return <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-xl sm:text-4xl font-bold">Administration</h1>
        <div className="flex flex-row gap-2">
            <Button variant="outline" asChild><Link href="/admin/dashboard">Dashboard</Link></Button>
            <Button variant="outline" asChild><Link href="/admin/files">Fichiers</Link></Button>
            <Button asChild><Link href="/admin/logout">Déconnecter</Link></Button>
        </div>
    </div>
}