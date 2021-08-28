const flattenRecursive = (arr) =>
  arr.reduce(
    (acc, e) => acc.concat(Array.isArray(e) ? flattenRecursive(e) : e),
    []
  );

const flattenIterative = (arr) => {
  let queue = [...arr];
  let result = [];
  while (queue.length) {
    let curr = queue.pop();
    if (Array.isArray(curr)) {
      queue.push(...curr);
    } else {
      result.unshift(curr);
    }
  }
  return result;
};

module.exports = {
  flattenIterative,
  flattenRecursive,
};
