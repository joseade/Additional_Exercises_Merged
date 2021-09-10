/**
 * @jest-environment jsdom
 */
const { cancellableFetch } = require("./Ex_03.js");

describe("Mocking aborts", () => {
  beforeEach(() => {
    fetch.resetMocks();
    fetch.doMock();
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  it("Testing cancellable fetch request", () => {
    fetch.mockAbortOnce();
    const result = cancellableFetch("/");
    result
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => {
        expect(err.message).toBe("The operation was aborted. ");
      });
    result.cancel();
  });
});

it("Successful fetch request", () => {
  fetch.mockResponses([
    JSON.stringify([{ name: "naruto", average_score: 79 }]),
    { status: 200 },
  ]);
  const result = cancellableFetch("/");
  result
    .then((res) => res.json())
    .then((data) =>
      expect(data).toStrictEqual([{ name: "naruto", average_score: 79 }])
    );
});

it("Reject fetch request", () => {
  fetch.mockReject(new Error("fake error message"));
  const result = cancellableFetch("/");
  result
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => expect(error.message).toBe("fake error message"));
});
