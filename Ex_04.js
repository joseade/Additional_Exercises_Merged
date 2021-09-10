const mergeArrays = (lArray, sArray) => {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < lArray.length && k < sArray.length) {
    let element1 = lArray[j];
    let element2 = sArray[k];

    if (element1 < element2) {
      j++;
    } else {
      lArray.pop();
      lArray.splice(j, 0, element2);
      j++;
      k++;
    }
    i++;
  }
};

module.exports = {
  mergeArrays,
};
