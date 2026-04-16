import { describe, expect, it } from "vitest";
import { myFunction } from "./myFunction";

//----------------------
// Tests
//----------------------

describe("myFunction", () => {
	it("should return the expected value", () => {
		const result = myFunction();
		expect(result).toBe("Hello from myFunction!");
	});
});
