"use client"

import { Skills } from "@/components/skills/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skill } from "@/types/skill";
import { Experience } from "@/types/experience";
import { Projet } from "@/types/projet";
import { Formation } from "@/types/formation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

type Last = {
    lastExperience: Experience;
    lastProject: Projet;
    lastFormation: Formation;
}

export function LandingCorpus() {
    const fetchData = async () => {
        const response = await fetch("/api/home");
        const data = await response.json();
        return data;
    }

    const [last, setLast] = useState<Last | null>(null);
    const [landingText, setLandingText] = useState<string | null>(null);
    const [skills, setSkills] = useState<Skill[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchData().then((data) => {
            setLast(data.last);
            setLandingText(data.landingText);
            setSkills(data.skills);
            setLoading(false);
        });
    }, []);

    const dataLoaded = last && landingText && skills;

    return (
        <>
            <div className="w-full">
                <div>
                    {loading || !dataLoaded ? <Skeleton className="h-24 w-full" /> : <div className="text-sm mb-4" dangerouslySetInnerHTML={{ __html: landingText }} />}
                </div>
            </div>
            <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4">
                        {loading || !dataLoaded ? 
                        <>
                            <Skeleton className="h-1/3 w-full" /> 
                            <Skeleton className="h-1/3 w-full" /> 
                            <Skeleton className="h-1/3 w-full" /> 
                        </> 
                        :
                        <>
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
                        </>
                        }
                    </div>
                    <Skills title="Compétences informatiques" skills={skills} loading={loading} />
                </div>
            </div>
        </>
    )
}