export default defineEventHandler(async () => {
    return await prisma.projet.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });
})