import axios from "axios";
import Users from "./practice";

jest.mock("axios");

describe("Users", () => {
  it("allメソッドがユーザー一覧を取得すること", async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: [{ id: 1, name: "user1" }] });
    const users = await Users.all();
    expect(users).toEqual([{ id: 1, name: "user1" }]);
  }
});
