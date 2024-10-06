import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { getContact } from "@/actions/getContact"

interface ContactInfo {
    mail: string;
    github: string;
    location: string;
    linkedin: string;
}

export default async function Contact() {

    const contact: ContactInfo = await getContact()

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
            </div>
            <p className="mt-6">Je vous répondrai dans les plus brefs délais. Merci de votre intérêt !</p>
        </div>
    );
}