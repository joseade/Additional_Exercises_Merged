/**
 * @jest-environment jsdom
 */
const { requestChain, result } = require("./Ex_03.js");

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
    fetch.mockResponses(
      [
        JSON.stringify([{ name: "naruto", average_score: 79 }]),
        { status: 200 },
      ],
      [
        JSON.stringify([{ name: "bleach", average_score: 68 }]),
        { status: 200 },
      ],
      [
        JSON.stringify([{ name: "one piece", average_score: 80 }]),
        { status: 200 },
      ],
      [
        JSON.stringify([{ name: "shingeki", average_score: 91 }]),
        { status: 200 },
      ]
    );

    expect(fetch("/")).rejects.toThrow("The operation was aborted. ");
  });

  // it("Testing cancellable fetch request", async () => {
  //   const result = await requestChain;
  //   expect(result).toEqual("Fetch request has been cancelled");
  // });
});
