import { prisma } from "../lib/prisma.js";
import type { UrlEntityInterface } from '../entities/UrlEntity.js';
import type { ICreateUrlRepository, CreateUrlProps } from "../interfaces/ICreateUrlRepository.js";

export default class CreateUrlRepository implements ICreateUrlRepository {
    async create({ slug, longUrl }: CreateUrlProps): Promise<UrlEntityInterface> {
        return await prisma.url.create({
            data: { slug, longUrl },
        });
    }
}