"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Projet } from "@/types/projet";
import { ProjectForm } from "@/components/forms/ProjectForm";
import { Loader } from "@/components/general/loader";

export default function EditProjectPage({ params }: { params: { id: number } }) {

    const [project, setProject] = useState<Projet>({ title: "", duration: "", description: "", location: "", littleDescription: "", technologies: [], extraLinks: [], image: "", landingDescription: "" });
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        fetch(`/api/projects/${params.id}`).then(r => {
            if (r.ok) return r.json()
            else throw new Error("Erreur lors de la récupération du projet");
        }).then(setProject).catch(() => {
            router.push("/admin/dashboard");
        }).finally(() => setLoading(false));
    }, [params.id, router]);

    const handleSubmit = async (data: Projet) => {
        const response = await fetch(`/api/projects/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        });

        if (response.ok) {
            setSuccess("Projet modifié avec succès");
            setTimeout(() => {
                router.push("/admin/dashboard");
            }, 1000);
        } else {
            setError("Erreur lors de la modification du projet");
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
            <ProjectForm project={project} onSubmit={handleSubmit} />
        </div>
    );
}
