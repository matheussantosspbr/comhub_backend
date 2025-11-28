import { prisma } from "../lib/prisma";
import type { UrlEntityInterface } from '../entities/UrlEntity.js';
import type { IGetAllRepository } from "../interfaces/IGetAllRepository.js";

export default class GetAllRepository implements IGetAllRepository {
    async getAll(): Promise<UrlEntityInterface[]> {
        return await prisma.url.findMany();
    }
}