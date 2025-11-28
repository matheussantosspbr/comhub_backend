import { expect, describe, it } from "vitest";
import { UrlEntity } from "../entities/UrlEntity.js";
import { RandomCharacter } from "../services/GenerateCode.js";
import CreateUrlRepository from "../tests/repositories/createUrlRepository";

describe("Create URL", () => {
    it("should create a short URL", async () => {
        const url = new UrlEntity("http://example.com", new RandomCharacter());
        expect(url.getSlug).toBeTypeOf("string");
        expect(url.getSlug.length).toBe(6);
        expect(url.getLongUrl).toBeTypeOf("string");    
    });

    it("should create a short URL with a valid long URL in repository", async () => {
        const url = new UrlEntity("http://example.com", new RandomCharacter());
        const createUrlRepository = new CreateUrlRepository();
        const response = await createUrlRepository.create({ slug: url.getSlug, longUrl: url.getLongUrl });
        expect(response).toBeTypeOf("object");
        expect(response).toEqual({ id: '1', slug: url.getSlug, longUrl: url.getLongUrl, clicks: 0 });
        expect(response).toHaveProperty("id");
        expect(response).toHaveProperty("slug");
        expect(response).toHaveProperty("longUrl");
        expect(response).toHaveProperty("clicks");
        expect(response.id).toBeTypeOf("string");
        expect(response.slug).toBeTypeOf("string");
        expect(response.longUrl).toBeTypeOf("string");
        expect(response.clicks).toBeTypeOf("number");
    });
});