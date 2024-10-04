import { Skills } from "@/components/skills/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getLandingLast, getSkills } from "@/actions/api";
import Link from "next/link";

export default async function LandingCorpus() {

    const skills = await getSkills();
    const { experience, formation, project } = await getLandingLast();

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
                            <p><strong>{experience.title}</strong></p>
                            <p>{experience.landingDescription}</p>
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
                            <p><strong>{project.title}</strong></p>
                            <p>{project.landingDescription}</p>
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
                            <p><strong>{formation.title}</strong></p>
                            <p>{formation.landingDescription}</p>
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