import DeleteUrlRepository from "../tests/repositories/deleteUrlRepository.js"
import { describe, it, expect } from "vitest";

describe("Delete URL", () => {
    it("should delete a URL", async () => {
        const deleteUrlRepository = new DeleteUrlRepository();
        deleteUrlRepository.delete("kSsxcS");
        expect(deleteUrlRepository.getRepo).toHaveLength(0);
    });
});
