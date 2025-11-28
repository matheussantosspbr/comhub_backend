import type { IDeleteUrlRepository } from "../interfaces/IDeleteUrlRepository.js";

export class DeleteUrlUseCase {
    private deleteUrlRepository: IDeleteUrlRepository;

    constructor(deleteUrlRepository: IDeleteUrlRepository) {
        this.deleteUrlRepository = deleteUrlRepository;
    }
    
    async execute(slug: string): Promise<void> {
        await this.deleteUrlRepository.delete(slug);
    }
}