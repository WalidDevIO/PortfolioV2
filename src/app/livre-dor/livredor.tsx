"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Credenza, CredenzaBody, CredenzaContent, CredenzaHeader, CredenzaTitle, CredenzaTrigger } from "@/components/ui/credenza";
import { Separator } from "@/components/ui/separator";
import { MessageListProps } from "./type";

export default function LivreDor({ messages }: MessageListProps) {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [post, setPost] = useState({
        name: "",
        content: "",
        created_at: new Date(),
    });

    const handleDialogClose = () => {
        setDialogOpen(false);
        setPost({
            name: "",
            content: "",
            created_at: new Date(),
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch('/api/livre-dor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        });
        setPost({
            name: "",
            content: "",
            created_at: new Date(),
        });
        setDialogOpen(false);
    };

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        if (value.length <= 500) {
            setPost((prev) => ({
                ...prev,
                content: value,
            }));
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-bold text-dark dark:text-white">Livre d&apos;or</h1>
                <Button variant="outline" onClick={() => setDialogOpen(true)}>
                    Laisser un message
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {messages.length === 0 && (
                    <div className="col-span-1 md:col-span-2 lg:col-span-3">
                        <Card className="p-4 rounded-lg shadow border-2 border-dark dark:border-white bg-transparent">
                            <CardContent className="text-center">
                                Aucun message trouvé.
                            </CardContent>
                        </Card>
                    </div>
                )}
                {messages.map((entry) => (
                    <Credenza key={entry.id}>
                        <CredenzaTrigger asChild>
                            <Card className="p-4 rounded-lg shadow border-2 border-dark dark:border-white bg-transparent hover:scale-[1.02] cursor-pointer duration-300">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-dark dark:text-white">
                                        {entry.name || "Anonyme"}
                                    </CardTitle>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Posté le {new Date(entry.created_at).toLocaleDateString("fr-FR")}
                                    </p>
                                </CardHeader>
                                <CardContent className="text-dark dark:text-white overflow-hidden text-ellipsis whitespace-nowrap">
                                    {entry.content}
                                </CardContent>
                            </Card>
                        </CredenzaTrigger>
                        <CredenzaContent className="flex flex-col">
                            <CredenzaHeader>
                                <CredenzaTitle className="flex flex-row flex-wrap justify-around items-center mb-1 md:mb-4">
                                    {entry.name || "Anonyme"}
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Posté le {new Date(entry.created_at).toLocaleDateString("fr-FR")}
                                    </p>
                                </CredenzaTitle>
                            </CredenzaHeader>
                            <Separator className="mb-1" />
                            <CredenzaBody>
                                <div className="prose dark:prose-dark mb-4 text-wrap w-full">{entry.content}</div>
                            </CredenzaBody>
                        </CredenzaContent>
                    </Credenza>
                ))}
            </div>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent className="bg-white dark:bg-black/80 border dark:border-gray-700 rounded-xl shadow-xl max-w-lg w-full p-6">
                    <DialogTitle className="text-xl font-bold text-dark dark:text-white mb-4">
                        Laissez un message
                    </DialogTitle>
                    <form onSubmit={handleSubmit}>
                        <Input 
                            value={post.name} 
                            onChange={(e) => setPost({ ...post, name: e.target.value })}
                            placeholder="Nom (Laissez vide pour rester anonyme)" 
                            className="w-full mb-4 p-3 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-black/80 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 resize-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        <Textarea
                            value={post.content}
                            onChange={handleMessageChange}
                            placeholder="Écrivez votre message ici..."
                            className="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-black/80 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 resize-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            Caractère restants : {post.content.length}/500
                        </p>
                        <div className="flex justify-end mt-4 space-x-3">
                            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition">
                                Envoyer
                            </Button>
                            <Button type="button" variant="outline" onClick={handleDialogClose}>
                                Annuler
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
