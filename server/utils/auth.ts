import { verifyToken } from "@/server/utils/jwt";
import { EventHandlerRequest, H3Event, parseCookies } from "h3";
import bcrypt from "bcrypt";

export async function hashPassword(password: string) {
    return await bcrypt.hash(password, 10)
}

export async function comparePasswords(password: string, hash: string) {
    return await bcrypt.compare(password, hash)
}

export const checkAuth = async (event: H3Event<EventHandlerRequest>) => {
    const cookies = parseCookies(event);
    const token = cookies.token;

    if (!token || !verifyToken(token)) {
        throw createError({ statusCode: 401, message: "Accès non autorisé" });
    }
};