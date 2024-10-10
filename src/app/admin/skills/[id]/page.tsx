"use client"

import { SkillForm } from "@/components/forms/skill-form";
import { Skill } from "@/types/skill";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader } from "@/components/general/loader";
export default function EditSkillPage({ params }: { params: { id: number } }) {

    const [skill, setSkill] = useState<Skill>({name: "", level: 0, description: ""});
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        fetch(`/api/skills/${params.id}`).then(r => {
            if(r.ok) return r.json()
            else throw new Error("Erreur lors de la récupération de la compétence");
        }).then(setSkill).catch(() => {
            router.push("/admin/dashboard");
        }).finally(() => setLoading(false));
    }, [params.id, router]);

    const handleSubmit = async (data: Skill) => {
        const response = await fetch(`/api/skills/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        });

        if (response.ok) {
            setSuccess("Compétence modifiée avec succès");
        } else {
            setError("Erreur lors de la modification du skill");
        }
    }

    return (loading ? 
        <Loader />

        :
        <div className="w-full flex flex-col justify-center items-center mt-8 gap-4">
            <SkillForm skill={skill} onSubmit={handleSubmit} flash={{ error: error, success: success }} />
        </div>
    );
}
