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

    await prisma.configuration.upsert({
        where: { mail: "contact@walidlab.dev" },
        update: {},
        create: {
            mail: "contact@walidlab.dev",
            location: "Brest - 29200, France",
            github: "https://github.com/WalidDevIO",
            linkedin: "https://fr.linkedin.com/in/walid-el-ouazizi-7b8a601b0",
            landingText: "EL OUAZIZI Walid, **Développeur polyvalent** passionné, 22 ans, avec **10 ans d'expérience**. Étudiant en **Master Informatique** Technologie de l'Information et Ingénierie Logiciel en alternance. **Autodidacte**, expertise du web aux langages complexes (Java, C). Créateur d'applications full-stack et de **programmes avancés**. Affinité pour le **back-end**, compétent en front-end. Motivé par la **curiosité** et l'**innovation**.\r\n<br/><br/>\r\nEn quête constante d'opportunités pour **évoluer** dans le développement logiciel : web, applications natives, systèmes complexes."
        }
    })

    console.log("Seeding OK")

}

main().catch((e) => {
    console.error(e)
    process.exit(1)
})