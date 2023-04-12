const { assert } = require("chai");

describe("User visits root", () => {
  describe("Post quote", () => {
    it("Save submitted quote", () => {
      const quote =
        "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.";
      const attributed = "Michael Scott";
      const source = "The Office";
      browser.url("/");
      browser.setValue("textarea[id=quote]", quote);
      browser.setValue("input[id=attributed]", attributed);
      browser.setValue("input[id=source]", source);
      browser.click("input[type=submit]");

      assert.include(browser.getText("#quote"), quote);
      assert.include(browser.getText("#attributed"), attributed);
      assert.include(browser.getText("#source"), source);
    });
  });
});
