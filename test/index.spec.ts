import { describe, it, expect } from "vitest";
import isConstructor from "../src/index";

class ConstructableTest {
  constructor() {
    return "has constructor";
  }
}

class EmptyClass {}

function ES5Class() {
  this.hi = "no constructor";
}

const arrowFunction = () => {
  return "sup";
};

const boundArrowFunction = arrowFunction.bind({});

describe("is-constructable", () => {
  describe("Consumer-created Classes", () => {
    it("should make a class constructable", () => {
      expect(isConstructor(ConstructableTest)).toBe(true);
    });

    it("should show an empty class as constructable", () => {
      expect(isConstructor(EmptyClass)).toBe(true);
    });

    it("should register an ES5 class", () => {
      expect(isConstructor(ES5Class)).toBe(true);
    });
  });

  describe("Native Classes", () => {
    it("should show String as constructable", () => {
      expect(isConstructor(String)).toBe(true);
    });
    it("should show Number as constructable", () => {
      expect(isConstructor(Number)).toBe(true);
    });
    it("should show Array as constructable", () => {
      expect(isConstructor(Array)).toBe(true);
    });
    it("should show Object as constructable", () => {
      expect(isConstructor(Object)).toBe(true);
    });
  });

  describe("Non-constructable Entities", () => {
    it("should show an object as non-constructable", () => {
      expect(isConstructor({})).toBe(false);
    });

    it("should show a number as non-constructable", () => {
      expect(isConstructor(3)).toBe(false);
    });

    it("should show a string as non-constructable", () => {
      expect(isConstructor("hi")).toBe(false);
    });

    it("should show an array as non-constructable", () => {
      expect(isConstructor([3])).toBe(false);
    });

    it("should show an arrow function as non-constructable", () => {
      expect(isConstructor(() => {})).toBe(false);
    });

    it("should show a bound arrow function as non-constructable", () => {
      expect(isConstructor(boundArrowFunction)).toBe(false);
    });

    it("should show null as non-constructable", () => {
      expect(isConstructor(null)).toBe(false);
    });

    it("should show undefined as non-constructable", () => {
      expect(isConstructor(undefined)).toBe(false);
    });
  });

  describe("Type assertions", () => {
    it("should allow type assertions for constructors", () => {
      if (isConstructor(ConstructableTest)) {
        const instance: ConstructableTest = new ConstructableTest();
        expect(instance).toBeInstanceOf(ConstructableTest);
      } else {
        throw new Error(
          "ConstructableTest should be recognized as a constructor"
        );
      }
    });

    it("should provide a Constructor type for concrete classes", () => {
      const ctor: isConstructor.Constructor<ConstructableTest> =
        ConstructableTest;
      const instance = new ctor();
      expect(instance).toBeInstanceOf(ConstructableTest);
    });
  });
});
