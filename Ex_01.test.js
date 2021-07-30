const { tasksLength, batches } = require("./Ex_01.js");
jest.setTimeout(30000);

// Pass test
test("Batches length equal to tasks length", async () => {
  expect.assertions(1);
  const data = await batches;
  expect(data.length).toEqual(tasksLength);
});

// Fail test
it("Batches length equal to tasks length", async () => {
  expect.assertions(1);
  const data = await batches;
  expect(data.length).not.toEqual(tasksLength + 9);
});
