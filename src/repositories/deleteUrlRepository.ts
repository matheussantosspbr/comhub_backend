import { prisma } from "../lib/prisma.js";
import type { IDeleteUrlRepository } from "../interfaces/IDeleteUrlRepository.js";

export default class DeleteUrlRepository implements IDeleteUrlRepository {
    async delete(slug: string): Promise<void> {
        await prisma.url.delete({
            where: { slug },
        });
    }
}