import type { UrlEntityInterface } from '../../entities/UrlEntity';
import type { IDeleteUrlRepository } from '../../interfaces/IDeleteUrlRepository';

export default class DeleteUrlRepository implements IDeleteUrlRepository {
    private repo: UrlEntityInterface[] = [{
        id: '1',
        slug: 'kSsxcS',
        longUrl: 'https://google.com',
        clicks: 0
    }];

    async delete(slug: string): Promise<void> {
        const index = this.repo.findIndex((url) => url.slug === slug);
        if (index === -1) return;
        this.repo.splice(index, 1);
    }

    get getRepo() {
        return this.repo;
    }
}