import type { UrlEntityInterface } from './../../entities/UrlEntity.js';
import type { ICreateUrlRepository, CreateUrlProps } from '../../interfaces/ICreateUrlRepository.js';

export default class CreateUrlRepository implements ICreateUrlRepository {
    private repo: UrlEntityInterface[] = [];

    async create({ slug, longUrl }: CreateUrlProps): Promise<UrlEntityInterface> {
        const newUrl = { id: '1', slug, longUrl, clicks: 0 };
        this.repo.push(newUrl);
        return newUrl;
    }
}