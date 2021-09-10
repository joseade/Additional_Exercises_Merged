const { queryRetry, urlQuery } = require("./Ex_02.js");

const maxRetry = 4;
const useIncrement = true;
const delay = 500;
const url = "https://jsonplaceholder.typicode.com/todos";

jest.setTimeout(30000);
beforeEach(() => {
  fetch.resetMocks();
});

it("Fetch Data without errors", async () => {
  fetch.mockResponseOnce(JSON.stringify(new Array(20)));
  const result = queryRetry(urlQuery(url), maxRetry, delay, useIncrement);
  const res = await result;
  expect(res.length).toEqual(20);
  expect(fetch.mock.calls.length).toEqual(1);
  expect(fetch.mock.calls[0][0]).toEqual(
    "https://jsonplaceholder.typicode.com/todos"
  );
});
