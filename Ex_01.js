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

const runBatches = (tasks, pool_size) => {
  const input = [...tasks];
  let r = 0;
  const a = [];
  return new Promise((resolve) => {
    const s = (inputTasks) => {
      while (inputTasks.length > 0 && r < pool_size) {
        let task = inputTasks.shift();
        r++;
        task()
          .then((res) => {
            a.push({ value: res });
            if (inputTasks.length === 0 && a.length === tasks.length) {
              resolve(a);
            }
            r--;
            if (inputTasks.length > 0) {
              s(inputTasks);
            }
          })
          .catch((err) => {
            a.push({ value: err });
            if (inputTasks.length === 0 && a.length === tasks.length) {
              resolve(a);
            }
            r--;
            if (inputTasks.length > 0) {
              s(inputTasks);
            }
          });
      }
    };
    s(input);
  });
};

const pool_size = 6;

const tasksLength = tasks.length;
const batches = runBatches(tasks, pool_size);
batches.then(console.log);

module.exports = { tasksLength, batches };
