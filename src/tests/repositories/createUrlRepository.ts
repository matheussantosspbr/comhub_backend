import type { UrlEntityInterface } from './../../entities/UrlEntity';
import type { ICreateUrlRepository, CreateUrlProps } from '../../interfaces/ICreateUrlRepository';

export default class CreateUrlRepository implements ICreateUrlRepository {
    private repo: UrlEntityInterface[] = [];

    async create({ slug, longUrl }: CreateUrlProps): Promise<UrlEntityInterface> {
        const newUrl = { id: '1', slug, longUrl, clicks: 0 };
        this.repo.push(newUrl);
        return newUrl;
    }
}