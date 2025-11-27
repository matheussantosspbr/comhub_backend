import type { UrlEntityInterface } from "../entities/UrlEntity.js";
import GetAllRepository from "../repositories/getAllRepository.js";

export class GetAllUseCase {
    private getAllRepository: GetAllRepository;

    constructor(getAllRepository: GetAllRepository) {
        this.getAllRepository = getAllRepository;
    }
    
    async execute(): Promise<UrlEntityInterface[] | null> {
        return await this.getAllRepository.getAll();
    }
}