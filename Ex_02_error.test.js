const { result } = require("./Ex_02.js");

jest.setTimeout(30000);
beforeEach(() => {
  fetch.resetMocks();
});

it("Errors during fetch request", async () => {
  fetch.mockReject(new Error("error"));
  const rate = await result;
  expect(rate).toEqual("error");
  expect(fetch).toHaveBeenCalledTimes(3);
  expect(fetch).toHaveBeenCalledWith(
    "https://jsonplaceholder.typicode.com/todos"
  );
});
