import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Projet } from "@/types/projet";
import { Credenza, CredenzaTrigger, CredenzaContent, CredenzaHeader, CredenzaTitle, CredenzaDescription, CredenzaBody } from "@/components/ui/credenza";
import { MapPin, CalendarDays, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Converter } from "showdown";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ProjetsCardsProps {
    projets: (Projet & { github?: string })[];
}

export function ProjetsCards({ projets }: ProjetsCardsProps) {
    const converter = new Converter();
    projets.map((p, idx) => {
        projets[idx] = {...p, description: converter.makeHtml(p.description), github: p.extraLinks?.find((link: { github?: boolean, url: string, title: string }) => link.github)?.url }
    })
    return (
        <div className="flex flex-wrap flex-row justify-center gap-4">
            {projets.map((projet, index) => (
                <Credenza key={index}>
                    <CredenzaTrigger asChild>
                        <Card className="w-48 h-48 flex flex-col flex flex-col justify-between">
                            <CardHeader>
                                <div className="flex flex-row justify-between items-center">
                                    <CardTitle className="text-sm mr-1">{projet.title}</CardTitle>
                                    <Image
                                        src={projet.image}
                                        alt={projet.title}
                                        width={45}
                                        height={45}
                                        className="relative rounded-full object-cover w-[45px] h-[45px]"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="mt-4 flex-grow">
                                <p>{projet.littleDescription}</p>
                            </CardContent>
                        </Card>
                    </CredenzaTrigger>
                    <CredenzaContent className="overflow-y-scroll overflow-x-auto flex flex-col">
                        <CredenzaHeader>
                            <CredenzaTitle>{projet.title}</CredenzaTitle>
                            <CredenzaDescription asChild>
                                <div className="flex flex-col gap-4 mt-4">
                                    <div className="flex flex-row gap-2 items-center font-bold">
                                        <MapPin />{projet.location}
                                    </div>
                                    <div className="flex flex-row gap-2 items-center font-bold">
                                        <CalendarDays />{projet.duration}
                                    </div>
                                </div>
                            </CredenzaDescription>
                        </CredenzaHeader>
                        <CredenzaBody>
                            <div dangerouslySetInnerHTML={{ __html: projet.description }} className="prose-ul prose-ol mb-4" />
                            {projet.technologies && (
                                <div className="flex flex-col gap-4 mb-4">
                                    <span className="font-bold">Technologies :</span>
                                    <div className="flex flex-wrap gap-2">
                                        {projet.technologies.map((technology, index) => (
                                            <Badge key={index}>
                                                {technology}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {projet.technologies && projet.technologies?.length > 0 && <Separator className="mb-2"/>}
                            <div className="flex flex-row gap-2 items-center my-2">
                                <Button asChild={projet.github ? true : false} disabled={projet.github ? false : true} className="w-full">
                                    <Link href={projet.github ?? "#"} target="_blank">
                                        <Github className="mr-2" />{projet.github ? "Voir sur GitHub" : "Code privé"}
                                    </Link>
                                </Button>
                            </div>
                        </CredenzaBody>
                    </CredenzaContent>
                </Credenza>
                
            ))}
        </div>
    )
}