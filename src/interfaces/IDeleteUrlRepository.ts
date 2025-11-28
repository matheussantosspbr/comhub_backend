export interface IDeleteUrlRepository {
    delete(slug: string): Promise<void>;
}
