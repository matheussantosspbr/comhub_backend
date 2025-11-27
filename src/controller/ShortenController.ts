import type { CreateUrlUseCase } from "../use-cases/create-url.js";
import type { DeleteUrlUseCase } from "../use-cases/delete-url.js";
import type { FindSlugUseCase } from "../use-cases/find-slug.js";
import type { GetAllUseCase } from "../use-cases/get-all.js";
import type { UpdateClickUseCase } from "../use-cases/update-click.js";

export class ShortenController {
    private createUseCase: CreateUrlUseCase;
    private findSlugUseCase: FindSlugUseCase;
    private updateClickUseCase: UpdateClickUseCase;
    private getAllUseCase: GetAllUseCase;
    private deleteUrlUseCase: DeleteUrlUseCase;

    constructor(createUseCase: CreateUrlUseCase, findSlugUseCase: FindSlugUseCase, updateClickUseCase: UpdateClickUseCase, getAllUseCase: GetAllUseCase, deleteUrlUseCase: DeleteUrlUseCase) {
        this.createUseCase = createUseCase;
        this.findSlugUseCase = findSlugUseCase;
        this.updateClickUseCase = updateClickUseCase;
        this.getAllUseCase = getAllUseCase;
        this.deleteUrlUseCase = deleteUrlUseCase;
    }

    async create(longUrl: string) {
        try {
            const url = await this.createUseCase.execute(longUrl);
            return { status: 201, url };
        } catch (error) {
            console.error(error);
            return { status: 500, error: error };
        }
    }

    async redirect(slug: string) {
        try {
            const url = await this.findSlugUseCase.execute(slug);
            if (!url) {
                return { status: 404, error: "URL not found" };
            }
            await this.updateClickUseCase.execute(slug);
            return { status: 200, url };
        } catch (error) {
            console.error(error);
            return { status: 500, error: error };
        }
    }

    async getAll() {
        try {
            const urls = await this.getAllUseCase.execute();
            return { status: 200, urls };
        } catch (error) {
            console.error(error);
            return { status: 500, error: error };
        }
    }

    async delete(slug : string) {
        try {
            await this.deleteUrlUseCase.execute(slug);
            return { status: 204 };
        } catch (error) {
            console.error(error);
            return { status: 500, error: error };
        }
    }
}