it("モック関数が呼び出されること", () => {
  const mockFunc = jest.fn();
  mockFunc();
  expect(mockFunc).toHaveBeenCalled();
});

it("モック関数が指定回数呼び出されること", () => {
  const mockFunc = jest.fn();
  mockFunc();
  mockFunc();
  expect(mockFunc).toHaveBeenCalledTimes(2);
});

it("モック関数が指定の引数で呼び出されること", () => {
  const mockFunc = jest.fn();
  mockFunc("first arg");
  expect(mockFunc).toHaveBeenCalledWith("first arg");
});
