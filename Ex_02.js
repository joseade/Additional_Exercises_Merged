const urlQuery = (url) => () => fetch(url);
const maxRetry = 4;
const useIncrement = true;
const delay = 5000;

const getData = async (urlQuery) => {
  try {
    const res = await urlQuery();
    const data = await res.json();
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const queryRetry = async (urlQuery, maxRetry, delay, useIncrement) => {
  try {
    for (let i = 0; i < maxRetry; i++) {
      const [data, error] = await getData(urlQuery);
      if (!error) {
        return data;
      } else {
        if (i === maxRetry - 1) return error.message;
        if (useIncrement) {
          await sleep(delay * (i + 1));
        } else {
          await sleep(delay);
        }
      }
    }
  } catch (e) {
    return null;
  }
};

const url = "https://jsonplaceholder.typicode.com/todos";
const result = queryRetry(urlQuery(url), maxRetry, delay, useIncrement);
result.then(console.log).catch((e) => console.log("EEEE"));

module.exports = { result };
