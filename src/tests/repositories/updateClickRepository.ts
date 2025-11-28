import type { UrlEntityInterface } from '../../entities/UrlEntity';
import type { IUpdateClickRepository } from '../../interfaces/IUpdateClickRepository';

export default class UpdateClickRepository implements IUpdateClickRepository {
    private repo: UrlEntityInterface[] = [{
        id: '1',
        slug: 'kSsxcS',
        longUrl: 'https://google.com',
        clicks: 0
    },
    {
        id: '2',
        slug: 'kSLxcS2',
        longUrl: 'https://youtube.com',
        clicks: 0
    }];

    async updateClicks(slug: string): Promise<void> {
        const index = this.repo.findIndex((url) => url.slug === slug);
        if (index === -1) return;   
        this.repo[index]!.clicks += 1;
    }

    get getRepo() {
        return this.repo;
    }
}