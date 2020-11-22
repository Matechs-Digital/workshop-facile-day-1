import * as App from "@app/math";

describe("App Suite", () => {
  it("add", () => {
    const result = App.add(1, 2);

    expect(result).toEqual(3);
  });
});
