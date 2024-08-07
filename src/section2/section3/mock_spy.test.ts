import { Calculator } from "./mock_spy";

it("sumメソッドが呼び出される", () => {
  const calculator = new Calculator();
  const spy = jest.spyOn(calculator, "sum");
  calculator.sum(1, 2);
  expect(spy).toHaveBeenCalled();

  spy.mockRestore();
});
