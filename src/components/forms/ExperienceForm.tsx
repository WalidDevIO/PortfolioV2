"use client"

import { Experience } from "@/types/experience"
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Combobox } from "../ui/combobox";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";

interface ExperienceFormProps {
    experience: Experience,
    onSubmit?: (data: Experience) => void
}

export function ExperienceForm({experience, onSubmit}: ExperienceFormProps) { 

    const form = useForm<Experience>({
        defaultValues: experience,
    });
    const [error, setError] = useState<string>("");

    const handleSubmit = (data: Experience) => {
        setError("");
        if(data.title === "" || data.duration === "" || data.location === "" || data.description === "" || data.image === "" || data.landingDescription === "") {
            setError("Tous les champs sont obligatoires");
        } else if(data.type !== "Alternance" && data.type !== "Stage" && data.type !== "Contrat de travail") {
            setError("Le type de contrat est invalide");
        } else {
            if(onSubmit) {
                onSubmit(data);
            }
        }
    }

    return (
        <Card className="w-full max-w-2xl">
            <CardHeader>
                <CardTitle>{experience.id ? "Modifier" : "Ajouter"} une expérience</CardTitle>
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
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Type de contrat</FormLabel>
                                    <FormControl>
                                        <Combobox options={[{label: "Alternance", value: "Alternance"}, {label: "Stage", value: "Stage"}, {label: "Contrat de travail", value: "Contrat de travail"}]} value={field.value} onChange={field.onChange} />
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
        </Card>
    )
}