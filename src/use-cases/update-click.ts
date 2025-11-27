import UpdateClickRepository from "../repositories/updateClickRepository.js";

export class UpdateClickUseCase {
    private updateClickRepository: UpdateClickRepository;

    constructor(updateClickRepository: UpdateClickRepository) {
        this.updateClickRepository = updateClickRepository;
    }
    
    async execute(slug: string): Promise<void> {
        await this.updateClickRepository.updateClicks(slug);
    }
}