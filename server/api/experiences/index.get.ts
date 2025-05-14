export default defineEventHandler(async () => {
    return await prisma.experience.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });
})