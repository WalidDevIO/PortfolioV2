"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Skill } from "@/types/skill";
import { Projet } from "@/types/projet";
import { Experience } from "@/types/experience";
import { Formation } from "@/types/formation";
import { useState } from "react";

interface DataEntry<T> {
    title: string
    entries: T[]
}

interface DashboardData {
    skills: DataEntry<Skill>
    projects: DataEntry<Projet>
    experiences: DataEntry<Experience>
    formations: DataEntry<Formation>
}

type DashboardDataEntry = [keyof DashboardData, DataEntry<Skill | Projet | Experience | Formation>] 

export function Entries({initialData}: {initialData: DashboardData}) {

    const isSkill = (entry: Skill | Projet | Experience | Formation): entry is Skill => 'name' in entry

    const [data, setData] = useState<DashboardData>(initialData)

    const deleteEntry = async (item: keyof DashboardData, id?: number) => {
        if (!id) return
        const res = await fetch(`/api/${item}/${id}`, { method: "DELETE" })
        if (res.ok) {
            setData({
                ...data,
                [item]: {
                    title: data[item].title,
                    entries: data[item].entries.filter((entry: Skill | Projet | Experience | Formation) => entry.id !== id)
                }
            })
        }
        return res.json()
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
            {(Object.entries(data) as DashboardDataEntry[]).map(([item, value]: DashboardDataEntry) => (
                <Card key={item}>
                    <CardHeader className="flex flex-row justify-between items-center">
                        <CardTitle>{value.title}</CardTitle>
                        <Button asChild><Link href={`/admin/${item}`}>Ajouter {value.title.slice(0, -1)}</Link></Button>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {value.entries.map((entry: Skill | Projet | Experience | Formation) => (
                                <li key={entry.id} className="p-2 ring-1 ring-primary rounded-md flex justify-between items-center">
                                    {isSkill(entry) ? entry.name : entry.title}
                                    <div className="flex flex-row items-center gap-2">
                                        <Button variant="outline" size="sm" asChild><Link href={`/admin/${item}/${entry.id}`}>Modifier</Link></Button>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <Trash2 className="text-red-500" />
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Êtes-vous sûr de vouloir supprimer {isSkill(entry) ? entry.name : entry.title} ?</DialogTitle>
                                                    <DialogDescription>
                                                        Cette action est irréversible. L&apos;élément sera définitivement supprimé.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <DialogFooter className="flex flex-row gap-2">
                                                    <DialogClose>Annuler</DialogClose>
                                                    <Button variant="destructive" onClick={() => deleteEntry(item, entry.id)}>Supprimer</Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}