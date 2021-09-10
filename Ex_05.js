const reverseBlocks = (arr, size) => {
  if (size <= 0) {
    throw new Error("Size must be greater or equal to one");
  }
  if (size > arr.length) {
    size = arr.length;
  }
  let i;
  for (i = 0; i < arr.length - size; i += size) {
    for (let j = 0; j < Math.floor(size / 2); j++) {
      [arr[i + j], arr[i - j + size - 1]] = [arr[i - j + size - 1], arr[i + j]];
    }
  }
  const last = arr.length - i;
  for (; i < arr.length; i += last) {
    for (let j = 0; j < Math.floor(last / 2); j++) {
      [arr[i + j], arr[i - j + last - 1]] = [arr[i - j + last - 1], arr[i + j]];
    }
  }
  return arr;
};

module.exports = {
  reverseBlocks,
};
