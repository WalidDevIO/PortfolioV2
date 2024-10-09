"use client"

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

interface ContactInfo {
    mail: string;
    github: string;
    location: string;
    linkedin: string;
}

export default function Contact() {

    const getContact = async (): Promise<ContactInfo> => {
        const contact = await fetch('/api/contact');
        const data = await contact.json();
        return data as ContactInfo;
    }

    const [contact, setContact] = useState<ContactInfo>({
        mail: "",
        github: "",
        location: "",
        linkedin: "",
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContact = async () => {
            const contact = await getContact();
            setContact(contact);
            setLoading(false);
        };
        fetchContact();
        console.log("contact");
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Me Contacter</h1>
            <p className="mb-4">Je suis toujours ouvert aux nouvelles opportunités et collaborations. N&apos;hésitez pas à me contacter !</p>
            <div className="space-y-4">
                { loading ? 
                <Skeleton className="w-full h-24" />
                :
                <>
                <p><strong>Email :</strong> {contact.mail}</p>
                <p><strong>Localisation :</strong> {contact.location}</p>
                </>
                }
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
                { loading ? 
                <>
                    <Skeleton className="w-full h-10 w-1/3" />
                    <Skeleton className="w-full h-10 w-1/3" />
                    <Skeleton className="w-full h-10 w-1/3" />
                </>
                :
                <>
                <Button asChild>
                    <a className="w-full" href={`mailto:${contact.mail}`}>
                        <Mail className="mr-2 h-4 w-4"/> Contactez-moi maintenant !
                    </a>
                </Button>
                <Button variant="outline" asChild>
                    <a className="w-full" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" /> Connectons-nous !
                    </a>
                </Button>
                <Button variant="outline" asChild>
                    <a href={contact.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Découvrez mes projets !
                        </a>
                    </Button>
                </>
                }
            </div>
            <p className="mt-6">Je vous répondrai dans les plus brefs délais. Merci de votre intérêt !</p>
        </div>
    );
}