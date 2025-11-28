import { describe, it, expect } from "vitest";
import { RandomCharacter } from "./GenerateCode.js";

describe("Generate Code", () => {
    it("should generate a random code", () => {
        const generateCode = new RandomCharacter();
        const code = generateCode.generate();
        expect(code).toHaveLength(6);
        expect(code).toBeTypeOf("string");
    })
})