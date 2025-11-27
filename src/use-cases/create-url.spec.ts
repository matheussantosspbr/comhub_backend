import { expect, test } from "vitest";
import { CreateUrlUseCase } from "./create-url.js";
import { UrlEntity } from "../entities/UrlEntity.js";
import { GenerateCode } from "../services/GenerateCode.js";

test("create short URL", async () => {
    const dummyEntity = new UrlEntity({ longUrl: "" }, new GenerateCode());
    const useCase = new CreateUrlUseCase(dummyEntity);
    
    const response = await useCase.execute({ longUrl: "http://example.com" });
    
    expect(response).toHaveProperty("url");
    expect(response.url).toHaveLength(6);
});
