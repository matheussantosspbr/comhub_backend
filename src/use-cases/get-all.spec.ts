import { describe, it, expect } from "vitest";
import GetAllRepository from "../tests/repositories/getAllRepository";

describe("Get all", () => {
    it("should return all slugs", () => {
        const getAllRepository = new GetAllRepository();
        const data = getAllRepository.getAll();
        expect(data).toBeTypeOf("object");
    });
});