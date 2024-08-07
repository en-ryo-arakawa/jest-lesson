import fs from "fs";
import { readFile } from "./mock_module";

jest.mock("fs");
const mockFs = jest.mocked(fs);
mockFs.readFileSync.mockReturnValue("mocked data");

it("readFileがデータを返却する", () => {
  const result = readFile("test.txt");
  expect(result).toBe("mocked data");
  expect(fs.readFileSync).toHaveBeenCalled();
});
