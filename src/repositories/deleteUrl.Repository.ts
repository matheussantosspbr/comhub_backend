import { prisma } from "@prisma/client"

export default class DeleteUrlRepository {
    async delete(slug: string): Promise<void> {
        return prisma.url.delete({
            where: { slug },
        });
    }
}