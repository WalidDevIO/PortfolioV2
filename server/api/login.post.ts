import { comparePasswords } from "@/server/utils/auth";
import { generateToken } from "@/server/utils/jwt";
import { z } from "zod"
import prisma from "@/server/utils/prisma";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const parsed = loginSchema.safeParse(body)

    if(!parsed.success) {
        throw createError({statusCode: 400, message: "Identifiants invalides"})
    }

    const user = await prisma.user.findUnique({
        where: { email: parsed.data.email },
    })

    if(!user || !(await comparePasswords(parsed.data.password, user.password))) {
        throw createError({statusCode: 400, message: "Identifiants invalides"})
    }

    const token = generateToken({id: user.id, email: user.email, role: user.role})

    setCookie(event, "token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/"
    })

    return { message: "Connexion réussie!" }
})