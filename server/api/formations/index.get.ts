export default defineEventHandler(async () => {
    return await prisma.formation.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });
})