import { UrlEntity, type UrlEntityInterface } from "../entities/UrlEntity.js";
import { RandomCharacter } from "../services/GenerateCode.js";
import type { ICreateUrlRepository } from "../interfaces/ICreateUrlRepository.js";

export class CreateUrlUseCase {
    private createUrlRepository: ICreateUrlRepository;

    constructor(createUrlRepository: ICreateUrlRepository) {
        this.createUrlRepository = createUrlRepository;
    }
    
    async execute(longUrl: string): Promise<UrlEntityInterface> {
        const url = new UrlEntity(longUrl, new RandomCharacter());
        const result = await this.createUrlRepository.create({ slug: url.getSlug, longUrl: url.getLongUrl });

        return result;
    }
}