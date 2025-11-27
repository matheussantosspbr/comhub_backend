import { prisma } from "@prisma/client"
import type { UrlEntityInterface } from '../entities/UrlEntity.js';

interface FindSlugsProps {
    slug: string;
}

export default class FindSlugRepository {
    async find({ slug }: FindSlugsProps): Promise<UrlEntityInterface | null> {
        return prisma.url.findUnique({
            where: { slug },
        });
    }
}