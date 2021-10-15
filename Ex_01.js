const taskFactorySample = (delay, resolve, val) => () =>
  new Promise((res, rej) => setTimeout(resolve ? res : rej, delay, val));

const runTask = async (task) => {
  try {
    const r = await task();
    // console.log(r);
    return { value: r };
  } catch (e) {
    // console.log(e);
    return { error: e };
  }
};
const runBatches = (tasks, pool_size) => {
  return new Promise((resolve) => {
    let i = 0;
    const q = new Array(tasks.length).fill(null);
    const runPromise = async () => {
      if (i === tasks.length) return;
      q[i] = await runTask(tasks[i++]);
      if (!q.includes(null)) {
        resolve(q);
      }
      await runPromise();
    };

    for (let j = 0; j < pool_size; j++) {
      runPromise();
    }
  });
};

module.exports = { taskFactorySample, runBatches };
