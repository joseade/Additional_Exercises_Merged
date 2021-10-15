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
      const r = lArray.pop();
      const auxArray = lArray.slice(j);
      lArray[j] = element2;
      let l = j + 1;
      for (const e of auxArray) {
        lArray[l] = e;
        l++;
      }
      j++;
      k++;
    }
    i++;
  }
};

module.exports = {
  mergeArrays,
};
