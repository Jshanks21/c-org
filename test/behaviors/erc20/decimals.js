/**
 * Requires `this.contract`
 */
module.exports = function () {
  describe("Behavior / ERC20 / decimals", function () {
    it("should have 18 decimals", async function () {
      assert.equal(await this.contract.decimals(), 18);
    });
  });
};
