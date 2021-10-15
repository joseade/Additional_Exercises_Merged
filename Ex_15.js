const findIndexOfBalancing = (arr) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let rightSum = arr[rightPointer];
  let leftSum = arr[leftPointer];
  while (rightPointer - leftPointer !== 1) {
    if (leftSum < rightSum) {
      leftPointer++;
      leftSum += arr[leftPointer];
    } else {
      rightPointer--;
      rightSum += arr[rightPointer];
    }
  }
  if (leftSum === rightSum) return leftPointer;
  return -1;
};

// const findIndexOfBalancing = (arr) => {
//   let rightSum = sum(arr);
//   let leftSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     leftSum += arr[i];
//     rightSum -= arr[i];
//     if (leftSum === rightSum) {
//       return i;
//     }
//   }
//   return -1;
// };

module.exports = {
  findIndexOfBalancing,
};
