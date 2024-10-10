import { ContactLoader } from "@/components/loaders/contact-loader";
import { Suspense } from "react";
import { ContactContent } from "@/components/contact/contact-content";

export default async function Contact() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Me Contacter</h1>
            <p className="mb-4">Je suis toujours ouvert aux nouvelles opportunités et collaborations. N&apos;hésitez pas à me contacter !</p>
            <Suspense fallback={<ContactLoader />}>
                <ContactContent />
            </Suspense>
            <p className="mt-6">Je vous répondrai dans les plus brefs délais. Merci de votre intérêt !</p>
        </div>
    );
}