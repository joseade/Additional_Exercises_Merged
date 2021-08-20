const findAreaOfBinaryMatrix = (matrix) => {
  let maxArea = 0;
  const x = new Array(matrix[0].length).fill(0);
  const area = (m) => {
    const max = (m) => {
      return Math.min(...m) * m.length;
    };
    let y = 0;
    m.forEach((e) => {
      const c = max(Array.from(e, Number));
      if (c > y) {
        y = c;
      }
    });
    return y;
  };
  for (let el of matrix) {
    for (let [index, e] of el.entries()) {
      if (e === 0) {
        x[index] = 0;
        continue;
      }
      x[index] += e;
    }
    const maxAreaOfRow = area(x.join("").match(/[1-9]+/gi));
    //console.log(x, maxAreaOfRow);
    if (maxAreaOfRow > maxArea) {
      maxArea = maxAreaOfRow;
    }
  }
  return maxArea;
};

// const bMatrix = [
//   [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
//   [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
// ];

const secondBMatrix = [
  [1, 0, 0, 1, 1, 1],
  [1, 0, 1, 1, 0, 1],
  [0, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 1],
];

console.log(findAreaOfBinaryMatrix(secondBMatrix));

module.exports = {
  findAreaOfBinaryMatrix,
};
