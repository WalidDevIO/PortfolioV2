"use client"

import { useState, useEffect } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { Flash } from "@/components/forms/flash";
import { Post } from "@/types/post";
import MarkdownEditor from "../ui/Editor";
import { Checkbox } from "../ui/checkbox";

interface PostFormProps {
    post: Post,
    onSubmit?: (data: Post) => void
    flash: {
        error: string,
        success: string,
    }
}

export function PostForm({ post, onSubmit, flash }: PostFormProps) {

    const form = useForm<Post>({
        defaultValues: post,
    });

    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");

    const handleSubmit = (data: Post) => {
        setError("");
        if (data.title === "" || data.slug === "" || data.content === "") {
            setError("Tous les champs sont obligatoires");
        } else {
            if (onSubmit) {
                onSubmit(data);
            }
        }
    }

    useEffect(() => {
        setError(flash.error);
        setSuccess(flash.success);
    }, [flash]);

    return (
        <>
            <Flash error={error} success={success} />
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>{post.id ? "Modifier" : "Ajouter"} un post</CardTitle>
                </CardHeader>
                <CardContent>
                    {error && (
                        <Alert>
                            <AlertTitle>Erreur</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Titre</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="slug"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Slug</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="published"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Publié ?</FormLabel>
                                        <FormControl>
                                            <Checkbox checked={field.value} onCheckedChange={field.onChange} className="m-2 pt-2" />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Contenu</FormLabel>
                                        <FormControl>
                                            <MarkdownEditor {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-end">
                                <Button type="submit">Enregistrer</Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card></>
    )
}