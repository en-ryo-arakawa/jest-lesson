it("初めてのmock", () => {
  const mockFunc = jest.fn(() => "Hello, mock!");
  expect(mockFunc()).toBe("Hello, mock!");
});

it("mockInplementation", () => {
  const mockFunc = jest.fn();
  mockFunc.mockImplementation(() => "Hello, mock2!");
  expect(mockFunc()).toBe("Hello, mock2!");
});
