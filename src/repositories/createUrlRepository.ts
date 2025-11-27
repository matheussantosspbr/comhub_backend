import { prisma } from "@prisma/client"
import type { UrlEntityInterface } from '../entities/UrlEntity.js';

interface CreateUrlProps {
    slug: string;
    longUrl: string;
}

export default class CreateUrlRepository {
    async create({ slug, longUrl }: CreateUrlProps): Promise<UrlEntityInterface> {
        return prisma.url.create({
            data: { slug, longUrl },
        });
    }
}