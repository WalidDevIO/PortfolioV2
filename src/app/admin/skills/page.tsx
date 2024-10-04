"use client"

import { SkillForm } from "@/components/forms/SkillForm";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skill } from "@/types/skill";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddSkillPage() {

    const skill = {
        name: "",
        level: 50,
        description: "",
    }

    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const router = useRouter();
    
    const handleSubmit = async (data: Skill) => {
        const response = await fetch("/api/skills", {
            method: "POST",
            body: JSON.stringify(data)
        });

        if(response.ok) {
            setSuccess("Compétence ajoutée avec succès");
            setTimeout(() => {
                router.push("/admin/dashboard");
            }, 1000);
        } else {
            setError("Erreur lors de l'ajout du skill");
        }
    }

    return (
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
            <SkillForm skill={skill} onSubmit={handleSubmit} />
        </div>
    );
}
