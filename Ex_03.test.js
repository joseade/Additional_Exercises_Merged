/**
 * @jest-environment jsdom
 */
const { requestChain } = require("./Ex_03.js");

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
    const result = await requestChain;
    expect(result).toEqual("Fetch request has been cancelled");
  });
});
