import type { UrlEntityInterface } from "../entities/UrlEntity.js";
import type { IGetAllRepository } from "../interfaces/IGetAllRepository.js";

export class GetAllUseCase {
    private getAllRepository: IGetAllRepository;

    constructor(getAllRepository: IGetAllRepository) {
        this.getAllRepository = getAllRepository;
    }
    
    async execute(): Promise<UrlEntityInterface[] | null> {
        return await this.getAllRepository.getAll();
    }
}