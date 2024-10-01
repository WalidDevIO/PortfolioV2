import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Projet } from "@/types/projet";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MapPin, CalendarDays, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Converter } from "showdown";
import Link from "next/link";

interface ProjetsCardsProps {
    projets: Projet[];
}

export function ProjetsCards({ projets }: ProjetsCardsProps) {
    const converter = new Converter();
    projets.map((p, idx) => {
        projets[idx] = {...p, description: converter.makeHtml(p.description) }
    })
    return (
        <div className="flex flex-wrap flex-row justify-center gap-4">
            {projets.map((projet, index) => (
                <Dialog key={index}>
                    <DialogTrigger asChild>
                        <Card className="w-48 h-48 flex flex-col flex flex-col justify-between">
                            <CardHeader>
                                <div className="flex flex-row justify-between items-center">
                                    <CardTitle className="text-md mr-1">{projet.title}</CardTitle>
                                    <img
                                        src={projet.image}
                                        alt={projet.title}
                                        width={45}
                                        height={45}
                                        className="relative rounded-full object-cover"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="mt-4 flex-grow">
                                <p>{projet.littleDescription}</p>
                            </CardContent>
                        </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl sm:max-h-full">
                        <DialogHeader>
                            <DialogTitle>{projet.title}</DialogTitle>
                            <DialogDescription asChild>
                                <div className="flex flex-col gap-4 mt-4">
                                    <div className="flex flex-row gap-2 items-center font-bold">
                                        <MapPin />{projet.location}
                                    </div>
                                    <div className="flex flex-row gap-2 items-center font-bold">
                                        <CalendarDays />{projet.duration}
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: projet.description }} className="prose-ul prose-ol"/>
                                    {projet.technologies && <div className="flex flex-row gap-4">
                                        Technologies :
                                        {projet.technologies.map((technology, index) => (
                                            <span key={index}>{technology}</span>
                                        ))}
                                    </div>}
                                    {projet.github && (
                                    <div className="flex flex-row gap-2 items-center">
                                        <Github /><Button asChild className="w-full"><Link href={projet.github} target="_blank">Voir sur GitHub</Link></Button>
                                    </div>)}
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
                
            ))}
        </div>
    )
}