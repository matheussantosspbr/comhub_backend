import type { IUpdateClickRepository } from "../interfaces/IUpdateClickRepository.js";

export class UpdateClickUseCase {
    private updateClickRepository: IUpdateClickRepository;

    constructor(updateClickRepository: IUpdateClickRepository) {
        this.updateClickRepository = updateClickRepository;
    }
    
    async execute(slug: string): Promise<void> {
        await this.updateClickRepository.updateClicks(slug);
    }
}