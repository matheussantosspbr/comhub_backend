import { expect, test } from "vitest";
import { UrlEntity } from "./UrlEntity.js";
import { GenerateCode } from "../services/GenerateCode.js";

test("create URL Entity", () => {
    const URL_ENTITY = new UrlEntity({ longUrl: "https://google.com" }, new GenerateCode());
    
    expect(URL_ENTITY).toBeInstanceOf(UrlEntity);
    expect(URL_ENTITY.getSlug).toBeDefined();
});