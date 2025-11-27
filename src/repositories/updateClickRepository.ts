import { prisma } from "@prisma/client"

export default class UpdateClickRepository {
    async updateClicks(slug: string): Promise<void> {
        await prisma.url.update({
            where: { slug },
            data: { clicks: { increment: 1 } },
        });
    }
}