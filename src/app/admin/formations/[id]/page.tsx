"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Formation } from "@/types/formation";
import { FormationForm } from "@/components/forms/FormationForm";
import { Loader } from "@/components/general/loader";

export default function EditFormationPage({ params }: { params: { id: number } }) {

    const [formation, setFormation] = useState<Formation>({ title: "", duration: "", description: "", location: "", speciality: "", technologies: [], extraLinks: [], image: "", landingDescription: "" });
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        fetch(`/api/formations/${params.id}`).then(r => {
            if (r.ok) return r.json()
            else throw new Error("Erreur lors de la récupération de la formation");
        }).then(setFormation).catch(() => {
            router.push("/admin/dashboard");
        }).finally(() => setLoading(false));
    }, [params.id, router]);

    const handleSubmit = async (data: Formation) => {
        const response = await fetch(`/api/formations/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        });

        if (response.ok) {
            setSuccess("Expérience modifiée avec succès");
            setTimeout(() => {
                router.push("/admin/dashboard");
            }, 1000);
        } else {
            setError("Erreur lors de la modification de l'expérience");
        }
    }

    return (loading ?
        <Loader />

        :
        <div className="w-full flex flex-col justify-center items-center mt-8 gap-4">
            {error && (
                <Alert>
                    <AlertTitle>Erreur</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
            {success && (
                <Alert>
                    <AlertTitle>Succès</AlertTitle>
                    <AlertDescription>{success}</AlertDescription>
                </Alert>
            )}
            <FormationForm formation={formation} onSubmit={handleSubmit} />
        </div>
    );
}
