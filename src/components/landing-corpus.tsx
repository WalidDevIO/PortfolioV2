import Skills from "@/components/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { datas } from "@/datas/datas";

export default function LandingCorpus() {

    const skills = datas.skills;

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
                            <p><strong>Développeur Full Stack</strong></p>
                            <p>Alternance de 2ans chez Genavir</p>
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
                            <p><strong>Portfolio</strong></p>
                            <p>Création de ce portfolio avec Next.js et TypeScript</p>
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
                            <p><strong>Master Informatique</strong></p>
                            <p>Spécialisation en Technologie de l'Information et Ingénierie Logiciel</p>
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