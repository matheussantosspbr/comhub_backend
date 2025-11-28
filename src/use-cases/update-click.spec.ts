import { describe, it, expect } from "vitest";
import UpdateClickRepository from "../tests/repositories/updateClickRepository";

describe("Update click", () => {
    it("should update click", async () => {
        const updateClickRepository = new UpdateClickRepository();
        await updateClickRepository.updateClicks("kSLxcS2");
        const repo = updateClickRepository.getRepo;
        const updatedItem = repo.find(item => item.slug === "kSLxcS2");
        
        expect(updatedItem).toBeDefined();
        expect(updatedItem!.clicks).toBe(1);
    });
});