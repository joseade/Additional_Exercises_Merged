let arr = [1, 2, 3, 4, 9, 9, 2, 7, 10, 13];

const sum = (arr) => arr.reduce((acc, e) => acc + e, 0);

const findIndexOfBalancing = (arr) => {
  let rightSum = sum(arr);
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i];
    rightSum -= arr[i];
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
};

console.log(findIndexOfBalancing(arr));

module.exports = {
  findIndexOfBalancing,
};
