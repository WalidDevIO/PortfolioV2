import { MapPin, CalendarDays, Github } from "lucide-react";
import { Credenza, CredenzaTrigger, CredenzaContent, CredenzaHeader, CredenzaTitle, CredenzaDescription, CredenzaBody } from "@/components/ui/credenza";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Experience } from "@/types/experience";
import { Formation } from "@/types/formation";
import { Projet } from "@/types/projet";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Link as LinkType } from "@/types/global";

type CardType = Experience | Formation | Projet & { github?: string };

interface GlobalCardsProps {
    cards: CardType[];
}

export function GlobalCards({ cards }: GlobalCardsProps) {

    const isFormation = (card: CardType): card is Formation => (card as Formation).speciality !== undefined;
    const isExperience = (card: CardType): card is Experience => (card as Experience).type !== undefined;
    const isProjet = (card: CardType): card is Projet => (card as Projet).littleDescription !== undefined;
    
    cards.forEach((c, idx) => {
        if (isProjet(c)) {
            cards[idx] = { ...cards[idx], github: c.extraLinks?.find((link: LinkType) => link.github)?.url }
        }
    })
    return (
        <div className="flex flex-wrap flex-row justify-center gap-4">
            {cards.map((card, index) => (
                <Credenza key={index}>
                    <CredenzaTrigger asChild>
                        <Card className="w-48 h-48 flex flex-col justify-center items-center hover:scale-[1.05] cursor-pointer duration-500">
                            <CardContent className={cn("flex flex-col items-center p-0 h-full gap-3", isProjet(card) ? "mt-8" : "mt-10")}>
                                <div className="flex flex-col items-center gap-3 w-full">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        width={65}
                                        height={65}
                                        className="rounded-full object-cover top-2 w-[65px] h-[65px]"
                                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                                        unoptimized
                                    />
                                    <CardTitle className="text-sm text-center">{card.title}</CardTitle>
                                </div>
                                {isProjet(card) && card.littleDescription && <CredenzaDescription className="text-sm text-center dark:text-white">{card.littleDescription}</CredenzaDescription>}
                            </CardContent>
                        </Card>
                    </CredenzaTrigger>
                    <CredenzaContent className="flex flex-col">
                        <CredenzaHeader>
                            <CredenzaTitle className="flex flex-row flex-wrap justify-around items-center mb-1 md:mb-4">
                                {card.title}
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    width={45}
                                    height={45}
                                    className="relative rounded-full object-cover w-[35px] h-[35px] md:w-[45px] md:h-[45px]"
                                    unoptimized
                                />
                            </CredenzaTitle>
                            <CredenzaDescription asChild>
                                <div className="flex flex-col gap-1 md:gap-4 text-sm">
                                    {isFormation(card) || isExperience(card) ? <div className="flex flex-row gap-2 justify-center items-center font-bold text-center">
                                        <Badge>{isFormation(card) ? card.speciality : isExperience(card) ? card.type : null}</Badge>
                                    </div> : null}
                                    <div className="flex flex-row gap-2 justify-center items-center font-bold">
                                        <MapPin /><Badge>{card.location}</Badge>
                                    </div>
                                    <div className="flex flex-row gap-2 justify-center items-center font-bold">
                                        <CalendarDays /><Badge>{card.duration}</Badge>
                                    </div>
                                </div>
                            </CredenzaDescription>
                        </CredenzaHeader>
                        <Separator className="mb-1" />
                        <CredenzaBody>
                            <div dangerouslySetInnerHTML={{ __html: card.description }} className="prose dark:prose-dark mb-4" />
                            {card.technologies && card.technologies.length > 0 && (
                                <div className="flex flex-col gap-4 mb-4">
                                    <span className="text-center font-bold">Technologies :</span>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {card.technologies.map((technology, index) => (
                                            <Badge key={index}>
                                                {technology}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {card.technologies && card.extraLinks && card.extraLinks.length > 0 && card.technologies.length > 0 && <Separator className="mb-2"/>}
                            {
                                !isProjet(card) ? card.extraLinks && card.extraLinks.length > 0 &&
                                    <div className="flex flex-col items-center gap-4 my-2">
                                        {card.extraLinks.map((file, index) => !file.github ? (
                                            <Button key={index} asChild className="w-full"><Link href={file.url} target="_blank">{file.title}</Link></Button>
                                        ) : (
                                            <div key={index} className="w-full flex flex-row gap-2 items-center">
                                                <Button asChild className="w-full"><Link href={file.url} target="_blank"><Github className="mr-2" />Voir sur GitHub</Link></Button>
                                            </div>
                                        ))}
                                    </div>
                                :
                                    <div className="flex flex-row gap-2 items-center my-2">
                                        <Button asChild={card.github ? true : false} disabled={card.github ? false : true} className="w-full">
                                            <Link href={card.github ?? "#"} target="_blank">
                                                <span className="flex flex-row gap-2 justify-center items-center">
                                                    <Github />{card.github ? "Voir sur GitHub" : "Code privé"}
                                                </span>
                                            </Link>
                                        </Button>
                                    </div>
                            }
                        </CredenzaBody>
                    </CredenzaContent>
                </Credenza>
            ))}
        </div>
    )
}