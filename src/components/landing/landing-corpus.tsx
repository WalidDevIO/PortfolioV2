import { Skills } from "@/components/skills/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skill } from "@/types/skill";
import { Experience } from "@/types/experience";
import { Projet } from "@/types/projet";
import { Formation } from "@/types/formation";
import { getLast } from "@/actions/getLast";
import { getSkills } from "@/actions/getSkills";
import { getLandingText } from "@/actions/getLandingText";
import Link from "next/link";

type Last = {
    lastExperience: Experience;
    lastProject: Projet;
    lastFormation: Formation;
}

export async function LandingCorpus() {
    const last: Last = await getLast()
    const landingText: string = await getLandingText()
    const skills: Skill[] = await getSkills()

    return (
        <>
            <div className="w-full">
                <div>
                    <div className="text-sm mb-4" dangerouslySetInnerHTML={{ __html: landingText }} />
                </div>
            </div>
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
        </>
    )
}