import { verifyToken } from "@/server/utils/jwt";
import { parseCookies } from "h3";

export default defineEventHandler(async (event) => {

    const url = event.node.req.url;

    if(url === "/api/login") return;

    const cookies = parseCookies(event);
    const token = cookies.token;

    if (!token || !verifyToken(token)) {
        throw createError({ statusCode: 401, message: "Accès non autorisé" });
    }
});