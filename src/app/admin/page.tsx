"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert } from "@/components/ui/alert"

export default function LoginPage() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [error, setError] = useState<string>("")

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        })

        if (response.ok) {
            router.push("/admin/dashboard")
        } else {
            const error = await response.json()
            setError(error.error)
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Connexion</CardTitle>    
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent>
                        {error && <Alert variant="destructive" className="mb-4">{error}</Alert>}
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Input
                                    id="email"
                                    placeholder="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="email"
                                    required
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Input
                                    id="password"
                                    placeholder="Mot de passe"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                    required
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full">Se connecter</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}