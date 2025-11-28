import type { UrlEntityInterface } from './../../entities/UrlEntity.js';
import type { IGetAllRepository } from '../../interfaces/IGetAllRepository.js';

export default class GetAllRepository implements IGetAllRepository {
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

    async getAll(): Promise<UrlEntityInterface[]> {
        return this.repo;
    }
}