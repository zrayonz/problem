import { translateToPigLatin } from "./problem";

describe("translateToPigLatin", function () {
  it("exists", function () {
    expect(translateToPigLatin).toBeDefined();
  });

  it("translates a word that starts with a vowel", function () {
    expect(translateToPigLatin("animal")).toBe("animalway");
  });
});
