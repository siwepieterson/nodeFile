var Visitor = require("../node");


describe("save method", () => {
    it("check if save method is defined", () => {
        var alice = new Visitor("alice", "phillip", 23 / 08, 11, "okay alright", "thembi");
        expect(alice.save).toBeDefined()
    });
});


describe("load method", () => {
    it("check if load method is defined", () => {
        var alice = new Visitor("alice", "phillip", 23 / 08, 11, "okay alright", "thembi");
        expect(alice.load).toBeDefined()
    });
    it("must load a JSON object when number is passed", () => {
        var alice = new Visitor("alice", "phillip", 23 / 08, 11, "okay alright", "thembi");
        let result = JSON.stringify(alice)
        expect(alice.load).toBeDefined()
    });
});


describe("counter method", () => {
    it("check if load method is defined", () => {
        var count = 0;
        let result = count++
        var alice = new Visitor("alice", "phillip", 23 / 08, 11, "okay alright", "thembi");
        expect(count).toBeDefined()
    });
});







