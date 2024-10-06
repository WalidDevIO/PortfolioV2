"use client"

import { useEffect, useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { Projet } from "@/types/projet";
import { Flash } from "@/components/forms/Flash";

interface ProjectFormProps {
    project: Projet,
    onSubmit?: (data: Projet) => void
    flash: {
        error: string,
        success: string,
    }
}

export function ProjectForm({ project, onSubmit, flash }: ProjectFormProps) {
    const form = useForm<Projet>({
        defaultValues: project,
    });

    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");

    const handleSubmit = (data: Projet) => {
        setError("");
        if (data.title === "" || data.duration === "" || data.location === "" || data.description === "" || data.image === "" || data.landingDescription === "") {
            setError("Tous les champs sont obligatoires");
        } else if (data.littleDescription === "") {
            setError("La description de carte est obligatoire");
        } else {
            if(onSubmit) {
                onSubmit(data);
            }
        }
    }

    useEffect(() => {
        setError(flash.error);
        setSuccess(flash.success);
    }, [flash]);

    return (<>
        <Flash error={error} success={success} />
        <Card className="w-full max-w-2xl">
            <CardHeader>
                <CardTitle>{project.id ? "Modifier" : "Ajouter"} un projet</CardTitle>
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
                            name="duration"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Durée</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Lieu</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Image</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="landingDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description pour l&apos;accueil</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="littleDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description de carte</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="technologies"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Technologies</FormLabel>
                                    <FormControl>
                                        <div className="flex flex-wrap gap-2">
                                            {field.value?.map((tech, index) => (
                                                <div key={index} className="flex items-center">
                                                    <Input
                                                        value={tech}
                                                        onChange={(e) => {
                                                            const newTechs = [...field.value || []];
                                                            newTechs[index] = e.target.value;
                                                            field.onChange(newTechs);
                                                        }}
                                                        className="w-full"
                                                    />
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        onClick={() => {
                                                            const newTechs = field.value?.filter((_, i) => i !== index) || [];
                                                            field.onChange(newTechs);
                                                        }}
                                                        className="ml-2"
                                                    >
                                                        X
                                                    </Button>
                                                </div>
                                            ))}
                                            <Button
                                                type="button"
                                                onClick={() => {
                                                    field.onChange([...(field.value || []), '']);
                                                }}
                                                className="mt-2"
                                            >
                                                Ajouter une technologie
                                            </Button>
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />


                        <FormField
                            control={form.control}
                            name="extraLinks"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Liens supplémentaires</FormLabel>
                                    <FormControl>
                                        <>
                                            <div className="space-y-4">
                                                {field.value?.map((link, index) => (
                                                    <div key={index} className="flex space-x-2">
                                                        <Input
                                                            placeholder="Nom"
                                                            value={link.title}
                                                            onChange={(e) => {
                                                                const newLinks = [...field.value || []];
                                                                newLinks[index].title = e.target.value;
                                                                field.onChange(newLinks);
                                                            }}
                                                        />
                                                        <Input
                                                            placeholder="URL"
                                                            value={link.url}
                                                            onChange={(e) => {
                                                                const newLinks = [...field.value || []];
                                                                newLinks[index].url = e.target.value;
                                                                field.onChange(newLinks);
                                                            }}
                                                        />
                                                        <div className="flex items-center">
                                                            <input
                                                                type="checkbox"
                                                                checked={link.github}
                                                                onChange={(e) => {
                                                                    const newLinks = [...field.value || []];
                                                                    newLinks[index].github = e.target.checked;
                                                                    field.onChange(newLinks);
                                                                }}
                                                                className="mr-2"
                                                            />
                                                            <label>GitHub</label>
                                                        </div>
                                                        <Button type="button" onClick={() => {
                                                            const newLinks = [...field.value || []];
                                                            newLinks.splice(index, 1);
                                                            field.onChange(newLinks);
                                                        }}>Supprimer</Button>
                                                    </div>
                                                ))}
                                            </div>
                                            <Button
                                                type="button"
                                                onClick={() => {
                                                    field.onChange([...(field.value || []), { title: '', url: '', github: false }]);
                                                }}
                                                className="mt-2"
                                            >
                                                Ajouter un lien
                                            </Button>
                                        </>
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