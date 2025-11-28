import { expect, describe, it } from "vitest";
import { UrlEntity } from "./UrlEntity.js";
import { RandomCharacter } from "../services/GenerateCode.js";

describe("create URL Entity", () => {
    it("should create a URL Entity", () => {
        const URL_ENTITY = new UrlEntity("https://google.com", new RandomCharacter());
        expect(URL_ENTITY).toBeInstanceOf(UrlEntity);
        expect(URL_ENTITY.getSlug).toBeDefined();
        expect(URL_ENTITY.getLongUrl).toBeDefined();
        expect(URL_ENTITY.getLongUrl).toBeTypeOf("string");
        expect(URL_ENTITY.getSlug).toBeTypeOf("string");

    });
});