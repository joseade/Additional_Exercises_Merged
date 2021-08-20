let arr = [1, 2, 3, 4, 9, 9, 2, 7, 10, 13];

const sum = (arr) => arr.reduce((acc, e) => acc + e, 0);

const findIndexOfBalancing = (arr) => {
  const a = sum(arr);
  for (const [i, v] of arr.entries()) {
    const leftSum = sum(arr.slice(0, i + 1));
    const rightSum = sum(arr.slice(i + 1, arr.length));
    //console.log(i, v, leftSum, rightSum);
    if (leftSum === rightSum) return i;
    if (leftSum > rightSum) return -1;
  }
};
console.log(findIndexOfBalancing(arr));

module.exports = {
  findIndexOfBalancing,
};
