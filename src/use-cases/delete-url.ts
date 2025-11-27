import DeleteUrlRepository from "../repositories/deleteUrl.Repository.js";

export class DeleteUrlUseCase {
    private deleteUrlRepository: DeleteUrlRepository;

    constructor(deleteUrlRepository: DeleteUrlRepository) {
        this.deleteUrlRepository = deleteUrlRepository;
    }
    
    async execute(slug: string): Promise<void> {
        await this.deleteUrlRepository.delete(slug);
    }
}