const { queryRetry, urlQuery } = require("./Ex_02.js");

const maxRetry = 4;
const useIncrement = true;
const delay = 500;
const url = "https://jsonplaceholder.typicode.com/todos";

jest.setTimeout(30000);
beforeEach(() => {
  fetch.resetMocks();
});

it("Errors during fetch request", async () => {
  fetch.mockReject(new Error("error"));
  const result = queryRetry(urlQuery(url), maxRetry, delay, useIncrement);
  const rate = await result;
  expect(rate).toEqual("error");
  expect(fetch).toHaveBeenCalledTimes(4);
  expect(fetch).toHaveBeenCalledWith(
    "https://jsonplaceholder.typicode.com/todos"
  );
});
