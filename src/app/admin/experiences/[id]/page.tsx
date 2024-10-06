"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Experience, ExperienceType } from "@/types/experience";
import { ExperienceForm } from "@/components/forms/ExperienceForm";
import { Loader } from "@/components/general/loader";

export default function EditExperiencePage({ params }: { params: { id: number } }) {

    const [experience, setExperience] = useState<Experience>({ title: "", duration: "", description: "", location: "", type: "" as ExperienceType, technologies: [], extraLinks: [], image: "", landingDescription: "" });
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        fetch(`/api/experiences/${params.id}`).then(r => {
            if (r.ok) return r.json()
            else throw new Error("Erreur lors de la récupération de l'expérience");
        }).then(setExperience).catch(() => {
            router.push("/admin/dashboard");
        }).finally(() => setLoading(false));
    }, [params.id, router]);

    const handleSubmit = async (data: Experience) => {
        const response = await fetch(`/api/experiences/${params.id}`, {
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
            <ExperienceForm experience={experience} onSubmit={handleSubmit} flash={{error: error, success: success}}/>
        </div>
    );
}
