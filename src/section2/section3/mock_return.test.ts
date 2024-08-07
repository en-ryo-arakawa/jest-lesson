it("モック関数に戻り値を設定する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValue("mocked value");

  expect(mockFunc()).toBe("mocked value");
});

it("モック関数に複数の戻り値を設定する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValueOnce("first value");
  mockFunc.mockReturnValueOnce("second value");

  expect(mockFunc()).toBe("first value");
  expect(mockFunc()).toBe("second value");
});

it("モック関数に一度だけの戻り値を設定する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValueOnce("first value");

  expect(mockFunc()).toBe("first value");
  expect(mockFunc()).toBe(undefined);
});

it("モック関数に非同期な戻り値を設定する", async () => {
  const mockFunc = jest.fn();
  mockFunc.mockResolvedValue("resolved value");
  const result = await mockFunc();
  expect(result).toBe("resolved value");
});
