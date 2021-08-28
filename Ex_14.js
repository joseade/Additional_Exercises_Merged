const findAreaOfBinaryMatrix = (matrix) => {
  let largestArea = 0;
  const x = new Array(matrix[0].length).fill(0);
  const area = (m) => {
    function maxAreaHistogram(arr) {
      let maxArea = 0;

      for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
          minHeight = Math.min(arr[i], arr[j]);
          for (let k = i; k < j; k++) {
            minHeight = Math.min(minHeight, arr[k]);
          }
          maxArea = Math.max(maxArea, minHeight * (j - i + 1));
        }
      }
      return maxArea;
    }

    let y = 0;
    m.forEach((e) => {
      const c = maxAreaHistogram(Array.from(e, Number));
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
    const findHistograms = x.join("").match(/[1-9]+/gi);
    if (findHistograms) {
      const maxAreaOfRow = area(findHistograms);
      if (maxAreaOfRow > largestArea) {
        largestArea = maxAreaOfRow;
      }
    }
  }
  return largestArea;
};

module.exports = {
  findAreaOfBinaryMatrix,
};
