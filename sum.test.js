const { sum, clone, age } = require("./sum");

describe("sum tests", () => {
  test("adds 1 + 1 to equal 2", () => {
    expect(sum(1, 1)).toBe(2);
  });

  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});

describe("clone tests", () => {
  test("array should be cloned", () => {
    let x = [1, 2, 3];
    expect(clone(x)).not.toBe(x);
  });

  test("array should contain the same elements", () => {
    expect(clone([1, 2, 3])).toEqual([1, 2, 3]);
  });
});

describe("age tests", () => {
  test("age of 1 should return 365 days", () => {
    expect(age(1)).toBe(365);
  });

  test("negative age should return an error", () => {
    const fun = () => {
      age(-1);
    };
    expect(fun).toThrow();
  });
});