import type { UrlEntityInterface } from './../../entities/UrlEntity';
import type { IFindSlugRepository, FindSlugsProps } from '../../interfaces/IFindSlugRepository';

export default class FindSlugRepository implements IFindSlugRepository {
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

    async find({ slug }: FindSlugsProps): Promise<UrlEntityInterface | null> {
        const index = this.repo.findIndex((url) => url.slug === slug);
        if (index === -1) return null;   
        return this.repo[index] || null;
    }

    get getRepo() {
        return this.repo;
    }
}