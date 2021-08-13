const longestRunOfTwoNumbers = (string) => {
  const arr = Array.from(string);
  let output = [];
  for (let [index, char] of arr.entries()) {
    let res = [];
    const arrOfTwoNumbers = [];
    arrOfTwoNumbers.push(char);
    let i = index;
    while (i < arr.length) {
      i += 1;
      if (arrOfTwoNumbers.includes(arr[i])) continue;
      if (arrOfTwoNumbers.length === 1) {
        arrOfTwoNumbers.push(arr[i]);
        continue;
      }
      res.push(...arr.slice(index, i));
      break;
    }
    if (res.length > output.length) {
      output = res;
    }
  }
  return output.length > 0 ? output.join("") : arr.join("");
};

const input = "1212223311212223";
console.log(longestRunOfTwoNumbers(input));
const input_2 = "111";
console.log(longestRunOfTwoNumbers(input_2));

module.exports = {
  longestRunOfTwoNumbers,
};
