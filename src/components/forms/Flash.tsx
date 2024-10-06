"use client"

import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface FlashProps {
    error: string;
    success: string;
}

export function Flash({ error, success }: FlashProps) {
    
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();
    useEffect(() => {
        setOpen(error !== "" || success !== "");
        if(success !== "") {
            setTimeout(() => {
                router.push("/admin/dashboard")
            }, 3000);
        }
    }, [error, success, router]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                {error && <><DialogTitle className="text-red-500">Erreur</DialogTitle>
                    <DialogDescription>{error}</DialogDescription></>}
                {success && <><DialogTitle className="text-green-500">Succès</DialogTitle>
                    <DialogDescription>{success}</DialogDescription></>}
            </DialogContent>
        </Dialog>
    );
}