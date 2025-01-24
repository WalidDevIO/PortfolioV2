"use client"

import { Post } from "@/types/post";
import { useState } from "react";
import { PostForm } from "@/components/forms/post-form";

export default function AddExperiencePage() {

    const post: Post = {
        title: "",
        content: "",
        slug: "",
    }

    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");

    const handleSubmit = async (data: Post) => {
        const response = await fetch("/api/blog", {
            method: "POST",
            body: JSON.stringify(data)
        });

        if (response.ok) {
            setSuccess("Post ajouté avec succès");
        } else {
            setError("Erreur lors de l'ajout du post");
        }
    }

    return (
        <div className="w-full flex flex-col justify-center items-center mt-8 gap-4">
            <PostForm post={post} onSubmit={handleSubmit} flash={{ error: error, success: success }} />
        </div>
    );
}
