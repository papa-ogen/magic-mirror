// Must have at least one test file in this directory or Mocha will throw an error.
const add = require("./add");

describe("add", () => {
    it("should add two numbers", () => {
        expect(add(1,2)).toBe(3);
    });
});