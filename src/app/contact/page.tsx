import { ContactLoader } from "@/components/loaders/contact-loader";
import ContactComponent from "./component";
import { Suspense } from "react";

export default async function Contact() {
    return (
        <div>
            <Suspense fallback={<ContactLoader />}>
                <ContactComponent />
            </Suspense>
        </div>
    )
}