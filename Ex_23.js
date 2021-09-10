#!/usr/bin/env node

const chalk = require("chalk");

const findPrimes = (n) => {
  const q = [2, 3];
  if (n === 1) return q.slice(0, 1);
  if (n === 2) return q.slice(0, 2);
  let i = 4;
  while (q.length < n) {
    let flag = true;
    for (let j = 0; j < q.length; j++) {
      if (q[j] > Math.sqrt(i)) {
        break;
      }
      if (i % q[j] === 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      q.push(i);
      const progress = Math.floor((q.length / n) * 100);
      process.stdout.write("\x1B[?25l");
      process.stdout.write(
        `${chalk.bgGreen.bold(" ".repeat(progress / 2))}${chalk.bgRed.bold(
          " ".repeat(50 - progress / 2)
        )}  ${chalk.yellow.bold(progress)}%\r`
      );
    }
    i++;
  }
  return q;
};

const length = process.argv[2];
findPrimes(length);

// Write in terminal: ./Ex_23.js 100000 or
// node Ex_23.js 1000000
