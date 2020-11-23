// test
import { division, minus, mult, sum } from "@app/primitives";

// test
import { arrayA } from "@app/arrays";

describe("Test", () => {
  it("should pass", () => {
    expect(division).toEqual(0.5);
    expect(mult).toEqual(0.5);
    expect(minus).toEqual(-0.5);
    expect(sum).toEqual(1.5);

    expect(-1 / 0).toEqual(-Infinity);
  });

  it("Concat", () => {
    const a = [1, 2, 3];
    const b = [4, 5, 6];
    expect(a.concat(b)).toEqual([...a, ...b]);
  });

  it("map", () => {
    const a = [1, 2, 3];
    expect(a.map((item) => item * 2)).toEqual([2, 4, 6]);
  });
});

describe("Array", () => {
  it("filter should pass", () => {
    expect(arrayA.filter((i) => i === "hello")).toEqual(["hello"]);
  });

  it("should pass", () => {
    expect([1, 2, 3].reduce((previous, current) => current + previous)).toEqual(
      6
    );
  });

  it("should not pass", () => {
    const a: number[] = [];
    expect(a.reduce((previous, current) => current + previous, 0)).toEqual(0);
  });

  it("flatMap", () => {
    expect([1, 2, 3].flatMap(range)).toEqual([0, 0, 1, 0, 1, 2]);
  });
});

function range(i: number) {
  const x: number[] = [];
  for (let k = 0; k < i; k++) {
    x.push(k);
  }
  return x;
}
