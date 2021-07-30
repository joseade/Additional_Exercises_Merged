const { result } = require("./Ex_02.js");

jest.setTimeout(30000);
beforeEach(() => {
  fetch.resetMocks();
});

it("Fetch Data without errors", async () => {
  fetch.mockResponseOnce(JSON.stringify(new Array(20)));
  const res = await result;
  expect(res.length).toEqual(20);
  expect(fetch.mock.calls.length).toEqual(1);
  expect(fetch.mock.calls[0][0]).toEqual(
    "https://jsonplaceholder.typicode.com/todos"
  );
});
