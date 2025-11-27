import { prisma } from "@prisma/client"
import type { UrlEntityInterface } from '../entities/UrlEntity.js';

export default class GetAllRepository {
    async getAll(): Promise<UrlEntityInterface[] | null> {
        return prisma.url.findMany();
    }
}