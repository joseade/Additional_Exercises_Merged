const { taskFactorySample, runBatches } = require("./Ex_01.js");
jest.setTimeout(30000);

test("Successful tasks", async () => {
  let tasks = [
    taskFactorySample(500, true, 1),
    taskFactorySample(400, true, 2),
    taskFactorySample(800, true, 3),
    taskFactorySample(700, true, 4),
  ];
  const pool_size = 4;
  const tasksLength = tasks.length;
  const batches = runBatches(tasks, pool_size);
  const data = await batches;
  expect(data).toStrictEqual([
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
  ]);
  expect(data.length).toBe(tasksLength);
});

it("Error in all tasks", async () => {
  let tasks = [
    taskFactorySample(500, false, 1),
    taskFactorySample(400, false, 2),
    taskFactorySample(800, false, 3),
    taskFactorySample(700, false, 4),
  ];
  const pool_size = 4;
  const tasksLength = tasks.length;
  const batches = runBatches(tasks, pool_size);
  const data = await batches;
  expect(data).toStrictEqual([
    { error: 1 },
    { error: 2 },
    { error: 3 },
    { error: 4 },
  ]);
  expect(data.length).toBe(tasksLength);
});

it("Error and Success tasks", async () => {
  let tasks = [
    taskFactorySample(500, true, 1),
    taskFactorySample(400, true, 2),
    taskFactorySample(800, false, "3-error"),
    taskFactorySample(700, true, 4),
    taskFactorySample(100, false, "5-error"),
    taskFactorySample(1000, false, "6-error"),
  ];
  const pool_size = 6;
  const tasksLength = tasks.length;
  const batches = runBatches(tasks, pool_size);
  const data = await batches;
  expect(data).toStrictEqual([
    { value: 1 },
    { value: 2 },
    { error: "3-error" },
    { value: 4 },
    { error: "5-error" },
    { error: "6-error" },
  ]);
  expect(data.length).toBe(tasksLength);
});
