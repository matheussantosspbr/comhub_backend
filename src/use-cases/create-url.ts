import { UrlEntity, type UrlEntityInterface } from "../entities/UrlEntity.js";
import { RandomCharacter } from "../services/GenerateCode.js";
import createUrlRepository from "../repositories/createUrlRepository.js";

export class CreateUrlUseCase {
    private createUrlRepository: createUrlRepository;

    constructor(createUrlRepository: createUrlRepository) {
        this.createUrlRepository = createUrlRepository;
    }
    
    async execute(longUrl: string): Promise<UrlEntityInterface> {
        const url = new UrlEntity(longUrl, new RandomCharacter());
        const result = await this.createUrlRepository.create({ slug: url.getSlug, longUrl: url.getLongUrl });

        return result;
    }
}