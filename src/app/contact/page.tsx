"use client"

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Contact as ContactType } from "@/types/contact";
import { Loader } from "@/components/general/loader";
const getContact = async () => {
    const response = await fetch("/api/contact");
    const data = await response.json();
    return data;
}

export default function Contact() {

    const [contact, setContact] = useState<ContactType>({
        mail: "",
        linkedin: "",
        location: "",
        github: ""
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getContact().then(setContact).finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Me Contacter</h1>
            <p className="mb-4">Je suis toujours ouvert aux nouvelles opportunités et collaborations. N&apos;hésitez pas à me contacter !</p>
            <div className="space-y-4">
                <p><strong>Email :</strong> {contact.mail}</p>
                <p><strong>Localisation :</strong> {contact.location}</p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button asChild>
                    <a className="w-full" href={`mailto:${contact.mail}`}>
                        <Mail className="mr-2 h-4 w-4" /> Contactez-moi maintenant !
                    </a>
                </Button>
                <Button asChild>
                    <a className="w-full" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" /> Connectons-nous !
                    </a>
                </Button>
                <Button asChild>
                    <a href={contact.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Découvrez mes projets !
                    </a>
                </Button>
            </div>
            <p className="mt-6">Je vous répondrai dans les plus brefs délais. Merci de votre intérêt !</p>
        </div>
    );
}