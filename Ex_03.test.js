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

  it("Testing cancellable fetch request", async () => {
    fetch.mockResponses([
      JSON.stringify([{ name: "naruto", average_score: 79 }]),
      { status: 200 },
    ]);
    fetch.mockAbortOnce();
    const result = cancellableFetch("/");
    result
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => {
        console.log(err);
      });

    result.cancel();

    expect(result.cancel()).toBeUndefined();
  });
});
