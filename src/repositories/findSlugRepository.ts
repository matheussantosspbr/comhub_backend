import { prisma } from "../lib/prisma.js";
import type { UrlEntityInterface } from '../entities/UrlEntity.js';
import type { IFindSlugRepository, FindSlugsProps } from "../interfaces/IFindSlugRepository.js";

export default class FindSlugRepository implements IFindSlugRepository {
    async find({ slug }: FindSlugsProps): Promise<UrlEntityInterface | null> {
        return await prisma.url.findUnique({
            where: { slug },
        });
    }
}