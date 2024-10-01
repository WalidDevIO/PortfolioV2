import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Converter } from "showdown";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, CalendarDays, Github } from "lucide-react";
import { Experience } from "@/types/experience";
import { Formation } from "@/types/formation";
import React from "react";

export function GlobalCards({ cards }: { cards: Experience[] | Formation[] }) {

    const isFormation = (card: Experience | Formation): card is Formation => (card as Formation).speciality !== undefined;

    const converter = new Converter();
    cards.map((c, idx) => {
        cards[idx] = { ...c, description: converter.makeHtml(c.description) }
    })
    return (
        <div className="flex flex-wrap flex-row justify-center gap-4">
            {cards.map((card, index) => (
                <Dialog key={index}>
                    <DialogTrigger asChild>
                        <Card className="w-48 h-48 flex flex-col justify-center items-center">
                            <CardContent className="flex flex-col items-center">
                                <div className="flex flex-col items-center gap-2">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        width={65}
                                        height={65}
                                        className="rounded-full object-cover top-2"
                                    />
                                    <CardTitle className="text-md text-center">{card.title}</CardTitle>
                                </div>
                            </CardContent>
                        </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl sm:max-h-full">
                        <DialogHeader>
                            <DialogTitle>{card.title}</DialogTitle>
                            <DialogDescription asChild>
                                <div className="flex flex-col gap-4 mt-4">
                                    <div>{isFormation(card) ? card.speciality : card.type}</div>
                                    <div className="flex flex-row gap-2 items-center font-bold">
                                        <MapPin />{card.location}
                                    </div>
                                    <div className="flex flex-row gap-2 items-center font-bold">
                                        <CalendarDays />{card.duration}
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: card.description }} className="prose-ul prose-ol" />
                                    {card.technologies && <div className="flex flex-row gap-4">
                                        Technologies :
                                        {card.technologies.map((technology, index) => (
                                            <span key={index}>{technology}</span>
                                        ))}
                                    </div>}
                                    {card.extraLinks && <div className="flex flex-row gap-4">
                                        {card.extraLinks.map((file, index) => !file.github ? (
                                            <Button key={index} asChild className="w-full"><Link href={file.url} target="_blank">{file.title}</Link></Button>  
                                        ) : (
                                            <div key={index} className="flex flex-row gap-2 items-center">
                                                <Github /><Button asChild className="w-full"><Link href={file.url} target="_blank">Voir sur GitHub</Link></Button>
                                            </div>
                                        ))}
                                    </div>}
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

            ))}
        </div>
    )
}