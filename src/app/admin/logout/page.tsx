"use client"

import { useRouter } from "next/navigation"

export default function Logout() {
    const router = useRouter()
    fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    })
    .then(() => {
        router.push("/admin")
    })
    .catch((error) => {
        console.error("Erreur lors de la déconnexion:", error)
    })
}