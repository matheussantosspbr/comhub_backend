import type { UrlEntityInterface } from "../entities/UrlEntity.js";
import FindSlugRepository from "../repositories/findSlugRepository.js";

export class FindSlugUseCase {
    private findSlugRepository: FindSlugRepository;

    constructor(findSlugRepository: FindSlugRepository) {
        this.findSlugRepository = findSlugRepository;
    }
    
    async execute(slug: string): Promise<UrlEntityInterface | null> {
        const url = await this.findSlugRepository.find({ slug });
        return url;
    }
}