"use client"

import { PostForm } from "@/components/forms/post-form";
import { Loader } from "@/components/general/loader";
import { Post } from "@/types/post";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditPost({ params }: { params: { id: number } }) {

    const [post, setPost] = useState<Post>({ title: "", content: "", slug: "" });
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        fetch(`/api/blog/${params.id}`).then(r => {
            if (r.ok) return r.json()
            else throw new Error("Erreur lors de la récupération du post");
        }).then(setPost).catch(() => {
            router.push("/admin/dashboard");
        }).finally(() => setLoading(false));
    }, [params.id, router]);

    const handleSubmit = async (data: Post) => {
        const response = await fetch(`/api/blog/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        });

        if (response.ok) {
            setSuccess("Post modifiée avec succès");
        } else {
            setError("Erreur lors de la modification du post");
        }
    }

    return (loading ?
        <Loader />
        :
        <div className="w-full flex flex-col justify-center items-center mt-8 gap-4">
            <PostForm post={post} onSubmit={handleSubmit} flash={{ error: error, success: success }} />
        </div>
    );


}
