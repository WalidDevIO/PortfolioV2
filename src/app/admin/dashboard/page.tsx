"use client"

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import { Skill } from "@/types/skill";
import { Projet } from "@/types/projet";
import { Experience } from "@/types/experience";
import { Formation } from "@/types/formation";
import { Loader } from "@/components/general/loader";
import { useState, useEffect } from "react";

const getSkills = async () => {
    const res = await fetch('/api/skills')
    return res.json()
}

const getProjects = async () => {
    const res = await fetch('/api/projects')
    return res.json()
}

const getExperiences = async () => {
    const res = await fetch('/api/experiences')
    return res.json()
}

const getFormations = async () => {
    const res = await fetch('/api/formations')
    return res.json()
}

const deleteEntry = async (item: string, id?: number) => {
    if(!id) return
    const res = await fetch(`/api/${item}/${id}`, { method: "DELETE" })
    if(res.ok) {
        window.location.reload()
    }
    return res.json()
}

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

export default function Dashboard() {
    const [data, setData] = useState<DashboardData>({ 
        skills: { title: "Compétences", entries: [] }, 
        projects: { title: "Projets", entries: [] }, 
        experiences: { title: "Expériences", entries: [] }, 
        formations: { title: "Formations", entries: [] } 
    })
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        Promise.all([getSkills(), getProjects(), getExperiences(), getFormations()])
            .then(([skills, projects, experiences, formations]) => {
                setData({ 
                    skills: { title: "Compétences", entries: skills }, 
                    projects: { title: "Projets", entries: projects }, 
                    experiences: { title: "Expériences", entries: experiences }, 
                    formations: { title: "Formations", entries: formations } 
                })
            }).finally(() => setLoading(false))
    }, [])

    const isSkill = (entry: Skill | Projet | Experience | Formation): entry is Skill => 'name' in entry

    if (loading) return <Loader />

    return (
        <div className="container mx-auto mt-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-xl sm:text-4xl font-bold">Tableau de bord</h1>
                <Button asChild><Link href="/admin/logout">Déconnecter</Link></Button>
            </div>
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
        </div>
    );
}