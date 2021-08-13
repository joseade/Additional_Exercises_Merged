const flattenRecursive = (arr) =>
  arr.reduce(
    (acc, e) => acc.concat(Array.isArray(e) ? flattenRecursive(e) : e),
    []
  );

const flattenIterative = (arr) => {
  const output = [];
  for (let [index, element] of arr.entries()) {
    if (!Array.isArray(element)) {
      output.push(element);
      continue;
    }
    var aux = element;
    while (aux.length) {
      if (!Array.isArray(aux[0])) {
        output.push(aux.shift());
        continue;
      }
      if (aux.length === 1) {
        aux = aux[0];
      }
      if (Array.isArray(aux[0])) {
        var [a] = aux[0];
        aux[0] = a;
      }
    }
  }
  return output;
};

const input = [1, 2, 3, [4, 5, [6, [[7]], 8]], [9, 10]];
//console.log(flatten(input));
console.log(flattenIterative(input));

module.exports = {
  flattenIterative,
  flattenRecursive,
};
