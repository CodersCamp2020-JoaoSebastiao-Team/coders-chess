"use strict";
describe("A suite is just a function", function () {
    var value;
    it("and so is a test", function () {
        value = true;
        expect(value).toBe(true);
    });
});
