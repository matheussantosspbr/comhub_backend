import type { UrlEntityInterface } from "../entities/UrlEntity.js";

export interface FindSlugsProps {
    slug: string;
}

export interface IFindSlugRepository {
    find(data: FindSlugsProps): Promise<UrlEntityInterface | null>;
}
