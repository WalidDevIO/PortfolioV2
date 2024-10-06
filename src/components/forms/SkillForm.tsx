"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Skill } from "@/types/skill";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState, useEffect } from "react";
import { Flash } from "@/components/forms/flash";

interface SkillFormProps {
    skill: Skill;
    onSubmit?: (data: Skill) => void;
    flash: {
        error: string,
        success: string,
    }
}

export function SkillForm({ skill, onSubmit, flash }: SkillFormProps) {
    const form = useForm<Skill>({
        defaultValues: skill,
    });

    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");

    const handleSubmit = (data: Skill) => {
        if(data.name === "" || data.description === "") {
            setError("Le nom et la description ne peuvent pas être vides");
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

    return (
        <>
        <Flash error={error} success={success} />
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>{skill.id ? "Modifier" : "Ajouter"} une compétence</CardTitle>
            </CardHeader>
            <CardContent>
                {error && (
                    <Alert>
                        <AlertTitle>Erreur</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4 p-4 rounded-md">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom de la compétence</FormLabel>
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
                            name="level"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Niveau</FormLabel>
                                    <FormControl>
                                        <Slider
                                            min={0}
                                            max={100}
                                            step={1}
                                            value={[field.value]}
                                            onValueChange={value => field.onChange(value[0])}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Enregistrer</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
        </>
    );
}
