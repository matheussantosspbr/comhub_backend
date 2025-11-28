import type { UrlEntityInterface } from "../entities/UrlEntity.js";

export interface CreateUrlProps {
    slug: string;
    longUrl: string;
}

export interface ICreateUrlRepository {
    create(data: CreateUrlProps): Promise<UrlEntityInterface>;
}
