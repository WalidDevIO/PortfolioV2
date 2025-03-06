import { Skills } from "@/components/skills/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

import { getSkills } from "@/actions/getSkills";
import { getLast } from "@/actions/getLast";
import { getLandingText } from "@/actions/getLandingText";
import { getLastPost } from "@/actions/blog";

export async function LandingCorpus() {

    const skills = await getSkills();
    const last = await getLast();
    const landingText = await getLandingText();
    const lastPost = await getLastPost();

    return (
        <>
            <div className="w-full">
                <div>
                    <div className="text-sm mb-4" dangerouslySetInnerHTML={{ __html: landingText }} />
                </div>
            </div>
            <div className="w-full">
                <div className="mb-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Mon dernier article
                            </CardTitle>
                        </CardHeader>
                        <Separator className="my-2"/>
                        <CardContent className="flex flex-col gap-2">
                            <div>
                                <span className="text-xl font-bold">{lastPost.title}</span>
                            </div>
                            <div className="mb-2">
                                <p>{lastPost.description}</p>
                            </div>
                            <div>
                                <Button variant="outline" asChild>
                                    <Link href={`/blog/${lastPost.slug}`}>Lire l'article</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
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