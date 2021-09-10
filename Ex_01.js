const taskFactorySample = (delay, resolve, val) => () =>
  new Promise((res, rej) => setTimeout(resolve ? res : rej, delay, val));

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
            a.push({ value: res, position: tasks.indexOf(task), origin: true });
            if (inputTasks.length === 0 && a.length === tasks.length) {
              const res = a.sort((a, b) => a.position - b.position);
              resolve(
                res.map((e) => {
                  if (e.origin) {
                    return { value: e.value };
                  }
                  return { error: e.value };
                })
              );
            }
            r--;
            if (inputTasks.length > 0) {
              s(inputTasks);
            }
          })
          .catch((err) => {
            a.push({
              value: err,
              position: tasks.indexOf(task),
              origin: false,
            });
            if (inputTasks.length === 0 && a.length === tasks.length) {
              const res = a.sort((a, b) => a.position - b.position);
              resolve(
                res.map((e) => {
                  if (e.origin) {
                    return { value: e.value };
                  }
                  return { error: e.value };
                })
              );
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

module.exports = { taskFactorySample, runBatches };
