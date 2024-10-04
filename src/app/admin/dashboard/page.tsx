import { getExperiences, getFormations, getProjects, getSkills } from "@/actions/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default async function Dashboard() {
    const skills = await getSkills()
    const projects = await getProjects()
    const experiences = await getExperiences()
    const formations = await getFormations()

    return (
        <div className="container mx-auto mt-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Tableau de bord</h1>
                <Button asChild><Link href="/admin/logout">Déconnecter</Link></Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader className="flex flex-row justify-between items-center">
                        <CardTitle>Compétences</CardTitle>
                        <Button asChild><Link href="/admin/skills">Ajouter Compétence</Link></Button>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {skills.map((skill) => (
                                <li key={skill.id} className="p-2 ring-[0.05rem] ring-primary rounded-md flex justify-between items-center">
                                    {skill.name}
                                    <Button variant="outline" size="sm" asChild><Link href={`/admin/skills/${skill.id}`}>Modifier</Link></Button>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row justify-between items-center">
                        <CardTitle>Projets</CardTitle>
                        <Button asChild><Link href="/admin/projects">Ajouter Projet</Link></Button>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {projects.map((project) => (
                                <li key={project.id} className="p-2 ring-[0.05rem] ring-primary rounded-md flex justify-between items-center">
                                    {project.title}
                                    <Button variant="outline" size="sm" asChild><Link href={`/admin/projects/${project.id}`}>Modifier</Link></Button>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row justify-between items-center">
                        <CardTitle>Expériences</CardTitle>
                        <Button asChild><Link href="/admin/experiences">Ajouter Expérience</Link></Button>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {experiences.map((experience) => (
                                <li key={experience.id} className="p-2 ring-[0.05rem] ring-primary rounded-md flex justify-between items-center">
                                    {experience.title}
                                    <Button variant="outline" size="sm" asChild><Link href={`/admin/experiences/${experience.id}`}>Modifier</Link></Button>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row justify-between items-center">
                        <CardTitle>Formations</CardTitle>
                        <Button asChild><Link href="/admin/formations">Ajouter Formation</Link></Button>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {formations.map((formation) => (
                                <li key={formation.id} className="p-2 ring-[0.05rem] ring-primary rounded-md flex justify-between items-center">
                                    {formation.title}
                                    <Button variant="outline" size="sm" asChild><Link href={`/admin/formations/${formation.id}`}>Modifier</Link></Button>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}