import { prisma } from "../lib/prisma.js";
import type { UrlEntityInterface } from '../entities/UrlEntity.js';
import type { IGetAllRepository } from "../interfaces/IGetAllRepository.js";

export default class GetAllRepository implements IGetAllRepository {
    async getAll(): Promise<UrlEntityInterface[]> {
        const res = await prisma.url.findMany();
        return res;
    }
}