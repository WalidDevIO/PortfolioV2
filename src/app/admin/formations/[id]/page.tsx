"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Formation } from "@/types/formation";
import { FormationForm } from "@/components/forms/formation-form";
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
        } else {
            setError("Erreur lors de la modification de l'expérience");
        }
    }

    return (loading ?
        <Loader />

        :
        <div className="w-full flex flex-col justify-center items-center mt-8 gap-4">
            <FormationForm formation={formation} onSubmit={handleSubmit} flash={{ error: error, success: success }} />
        </div>
    );
}
