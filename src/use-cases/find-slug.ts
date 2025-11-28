import type { UrlEntityInterface } from "../entities/UrlEntity.js";
import type { IFindSlugRepository } from "../interfaces/IFindSlugRepository.js";

export class FindSlugUseCase {
    private findSlugRepository: IFindSlugRepository;

    constructor(findSlugRepository: IFindSlugRepository) {
        this.findSlugRepository = findSlugRepository;
    }
    
    async execute(slug: string): Promise<UrlEntityInterface | null> {
        const url = await this.findSlugRepository.find({ slug });
        return url;
    }
}