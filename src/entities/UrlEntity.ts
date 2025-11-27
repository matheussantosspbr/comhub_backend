import type { GenerateCodeInterface } from "../interfaces/GenerateCodeInterface.js";

export interface UrlEntityInterface {
    id: string;
    slug: string;
    longUrl: string;
    clicks: number;
}

export class UrlEntity {
    private longUrl: string;
    private slug: string;

    constructor(longUrl: string, private generateCode: GenerateCodeInterface) {
        this.longUrl = longUrl;
        this.slug = this.generateCode.generate();
    }

    get getSlug(){
        return this.slug;
    }

    get getLongUrl(){
        return this.longUrl;
    }
}