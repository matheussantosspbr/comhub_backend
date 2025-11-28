import { prisma } from "../lib/prisma.js";
import type { IUpdateClickRepository } from "../interfaces/IUpdateClickRepository.js";

export default class UpdateClickRepository implements IUpdateClickRepository {
    async updateClicks(slug: string): Promise<void> {
        await prisma.url.update({
            where: { slug },
            data: {
                clicks: {
                    increment: 1
                }
            }
        })
    }
}