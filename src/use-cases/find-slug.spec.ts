import { describe, it, expect } from "vitest";
import FindSlugRepository from "../tests/repositories/findSlugRepository.js"

describe("Find slug", () => {
    it("should find a slug", async () => {
        const findSlugRepository = new FindSlugRepository();
        const data = await findSlugRepository.find({ slug: "kSsxcS" });
        expect(data).toBeTypeOf("object");
        expect(data).toHaveProperty("slug");
        expect(data).toHaveProperty("longUrl");
        expect(data).toHaveProperty("clicks");
        expect(data).toHaveProperty("id");
    });
});