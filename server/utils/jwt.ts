import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY as string

export function generateToken(payload: object) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: "7d" });
}

export function verifyToken(token: string) {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (e) {
        return null;
    }
}
