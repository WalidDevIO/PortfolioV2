import prisma from "@/server/utils/prisma"
import { hashPassword } from "@/server/utils/auth"

async function main() {
    const password = await hashPassword(process.env.ADMIN_PASSWORD as string)

    await prisma.user.upsert({
        where: { email: "admin@walidlab.dev" },
        update: {},
        create: {
            email: "admin@walidlab.dev",
            password,
            role: "admin"
        }
    })

    console.log("Seeding OK")

}

main().catch((e) => {
    console.error(e)
    process.exit(1)
})