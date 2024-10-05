import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Converter } from "showdown";
import { Credenza, CredenzaTrigger, CredenzaContent, CredenzaHeader, CredenzaTitle, CredenzaDescription, CredenzaBody } from "@/components/ui/credenza";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, CalendarDays, Github } from "lucide-react";
import { Experience } from "@/types/experience";
import { Formation } from "@/types/formation";
import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
export function GlobalCards({ cards }: { cards: Experience[] | Formation[] }) {

    const isFormation = (card: Experience | Formation): card is Formation => (card as Formation).speciality !== undefined;

    const converter = new Converter();
    cards.map((c, idx) => {
        cards[idx] = { ...c, description: converter.makeHtml(c.description) }
    })
    return (
        <div className="flex flex-wrap flex-row justify-center gap-4">
            {cards.map((card, index) => (
                <Credenza key={index}>
                    <CredenzaTrigger asChild>
                        <Card className="w-48 h-48 flex flex-col justify-center items-center">
                            <CardContent className="flex flex-col items-center pb-0">
                                <div className="flex flex-col items-center gap-2 w-full">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        width={65}
                                        height={65}
                                        className="rounded-full object-cover top-2 w-[65px] h-[65px]"
                                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                                    />
                                    <CardTitle className="text-sm text-center">{card.title}</CardTitle>
                                </div>
                            </CardContent>
                        </Card>
                    </CredenzaTrigger>
                    <CredenzaContent className="flex flex-col">
                        <CredenzaHeader>
                            <CredenzaTitle>{card.title}</CredenzaTitle>
                            <CredenzaDescription asChild>
                                <div className="flex flex-col gap-4 mt-4">
                                    <div>{isFormation(card) ? card.speciality : card.type}</div>
                                    <div className="flex flex-row gap-2 items-center font-bold">
                                        <MapPin />{card.location}
                                    </div>
                                    <div className="flex flex-row gap-2 items-center font-bold">
                                        <CalendarDays />{card.duration}
                                    </div>
                                </div>
                            </CredenzaDescription>
                        </CredenzaHeader>
                        <CredenzaBody className="text-sm">
                            <div dangerouslySetInnerHTML={{ __html: card.description }} className="prose-ul prose-ol mb-4" />
                            {card.technologies && (
                                <div className="flex flex-col gap-4 mb-4">
                                    <span className="font-bold">Technologies :</span>
                                    <div className="flex flex-wrap gap-2">
                                        {card.technologies.map((technology, index) => (
                                            <Badge key={index}>
                                                {technology}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {card.technologies && card.extraLinks && card.extraLinks.length > 0 && card.technologies.length > 0 && <Separator className="mb-2"/>}
                            {card.extraLinks && <div className="flex flex-col items-center gap-4 my-2">
                                {card.extraLinks.map((file, index) => !file.github ? (
                                    <Button key={index} asChild className="w-full"><Link href={file.url} target="_blank">{file.title}</Link></Button>
                                ) : (
                                    <div key={index} className="w-full flex flex-row gap-2 items-center">
                                        <Button asChild className="w-full"><Link href={file.url} target="_blank"><Github className="mr-2" />Voir sur GitHub</Link></Button>
                                    </div>
                                ))}
                            </div>}
                        </CredenzaBody>
                    </CredenzaContent>
                </Credenza>
            ))}
        </div>
    )
}