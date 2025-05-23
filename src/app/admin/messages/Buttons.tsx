"use client";
import { Button } from "@/components/ui/button";
import { Message } from "@/app/livre-dor/type";

export function AcceptButton({message}: {message: Message}) {
    const handleAccept = () => {
        fetch("/api/livre-dor", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
        }).catch(() => {
            alert("Error accepting message");
        });
    };

    return (
        <Button onClick={handleAccept} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-5">
            Accepter
        </Button>
    );
}

export function DeleteButton({ message }: { message: Message }) {
    const handleDelete = () => {
        fetch("/api/livre-dor", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
        }).catch(() => {
            alert("Error deleting message");
        });
    };

    return (
        <Button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Supprimer
        </Button>
    );
}