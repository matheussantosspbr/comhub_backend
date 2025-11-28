export interface IUpdateClickRepository {
    updateClicks(slug: string): Promise<void>;
}
