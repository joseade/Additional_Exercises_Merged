const { ModuleKind } = require("typescript");

const taskFactorySample = (delay, resolve, val) => () =>
  new Promise((res, rej) => setTimeout(resolve ? res : rej, delay, val));
const tasks = [
  taskFactorySample(500, true, 1),
  taskFactorySample(1000, true, 2),
  taskFactorySample(5000, false, "error"),
  taskFactorySample(2000, true, 4),
  taskFactorySample(1000, false, "error"),
  taskFactorySample(1000, false, "error"),
];

const getTask = async (task) => {
  try {
    const res = await task();
    return { val: res };
  } catch (err) {
    return { error: err };
  }
};

const runBatches = async (tasks, pool_size) => {
  let res = [];
  for (let i = 0; i < tasks.length; i = i + pool_size) {
    const data = tasks.slice(i, i + pool_size).map((task) => getTask(task));
    const ans = await Promise.all(data);
    res.push(...ans);
  }
  return res;
};

const pool_size = 2;
runBatches(tasks, pool_size).then(console.log);

const tasksLength = tasks.length;
const batches = runBatches(tasks, pool_size);

module.exports = { tasksLength, batches };
