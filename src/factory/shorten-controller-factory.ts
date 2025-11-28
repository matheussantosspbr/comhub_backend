import { ShortenController } from "../controller/ShortenController.js";
import { CreateUrlUseCase } from "../use-cases/create-url.js";
import { FindSlugUseCase } from "../use-cases/find-slug.js";
import { UpdateClickUseCase } from "../use-cases/update-click.js";
import { GetAllUseCase } from "../use-cases/get-all.js";
import { DeleteUrlUseCase } from "../use-cases/delete-url.js";
import CreateUrlRepository from "../repositories/createUrlRepository.js";
import FindSlugRepository from "../repositories/findSlugRepository.js";
import UpdateClickRepository from "../repositories/updateClickRepository.js";
import GetAllRepository from "../repositories/getAllRepository.js";
import DeleteUrlRepository from "../repositories/deleteUrlRepository.js";

export function makeShortenController() {
    const createUC = new CreateUrlUseCase(new CreateUrlRepository());
    const findSlugUC = new FindSlugUseCase(new FindSlugRepository());
    const updateClickUC = new UpdateClickUseCase(new UpdateClickRepository());
    const getAllUC = new GetAllUseCase(new GetAllRepository());
    const deleteUC = new DeleteUrlUseCase(new DeleteUrlRepository());

    return new ShortenController(
        createUC,
        findSlugUC,
        updateClickUC,
        getAllUC,
        deleteUC
    );
}
