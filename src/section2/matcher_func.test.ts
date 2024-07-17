// toBe
it("数値のテスト", () => {
  expect(1 + 2).toBe(3);
});

it("文字列のテスト", () => {
  expect("Hello" + "World").toBe("HelloWorld");
});

it("真偽値のテスト", () => {
  expect(true).toBe(true);
});

// toEqual
it("配列のテスト", () => {
  expect([1, 2, 3]).toEqual([1, 2, 3]);
});

it("オブジェクトのテスト", () => {
  expect({ key: "value" }).toEqual({ key: "value" });
});

// not
it("否定のテスト", () => {
  expect(1 + 2).not.toBe(4);
});
