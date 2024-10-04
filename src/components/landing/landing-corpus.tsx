"use client"

import { Skills } from "@/components/skills/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Skill } from "@/types/skill";
import { Experience } from "@/types/experience";
import { Projet } from "@/types/projet";
import { Formation } from "@/types/formation";

const getSkills = async () => {
    const response = await fetch("/api/skills");
    const data = await response.json();
    return data;
}

const getLast = async () => {
    const response = await fetch("/api/last");
    const data = await response.json();
    return data;
}

type Last = {
    lastExperience: Experience;
    lastProject: Projet;
    lastFormation: Formation;
}

export default function LandingCorpus() {

    const [skills, setSkills] = useState<Skill[]>([]);
    const [last, setLast] = useState<Last>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        Promise.all([getSkills(), getLast()]).then(([skills, last]) => {
            setSkills(skills);
            setLast(last);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Dernière expérience</CardTitle>
                        </CardHeader>
                        <Separator className="my-2" />
                        <CardContent>
                            <p><strong>{last?.lastExperience.title}</strong></p>
                            <p>{last?.lastExperience.landingDescription}</p>
                            <div className="flex justify-center mt-4">
                                <Button variant="outline">
                                    <Link href="/experiences">En savoir plus sur mes expériences !</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Dernier projet</CardTitle>
                        </CardHeader>
                        <Separator className="my-2" />
                        <CardContent>
                            <p><strong>{last?.lastProject.title}</strong></p>
                            <p>{last?.lastProject.landingDescription}</p>
                            <div className="flex justify-center mt-4">
                                <Button variant="outline" asChild>
                                    <Link href="/projets">En savoir plus sur mes projets !</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Dernière formation</CardTitle>
                        </CardHeader>
                        <Separator className="my-2" />
                        <CardContent>
                            <p><strong>{last?.lastFormation.title}</strong></p>
                            <p>{last?.lastFormation.landingDescription}</p>
                            <div className="flex justify-center mt-4">
                                <Button variant="outline">
                                    <Link href="/formations">En savoir plus sur mes formations !</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <Skills title="Compétences informatiques" skills={skills} />
            </div>
        </div>
    )
}