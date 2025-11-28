import type { UrlEntityInterface } from "../entities/UrlEntity.js";

export interface IGetAllRepository {
    getAll(): Promise<UrlEntityInterface[]>;
}
