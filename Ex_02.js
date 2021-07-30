const urlQuery = (url) => () => fetch(url);
const maxRetry = 4;
const useIncrement = true;
const delay = 500;

const getData = async (urlQuery) => {
  try {
    const res = await urlQuery();
    const data = await res.json();
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};

const getDelay = async (sleep) => {
  try {
    const data = await sleep;
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
      //throw new Error("SSS");
      if (!error) {
        return data;
      }
      if (error) {
        if (i === maxRetry - 1) return error.message;
        if (useIncrement) {
          await getDelay(sleep(delay * (i + 1)));
        } else {
          await getDelay(sleep(delay));
        }
      }
    }
  } catch (e) {
    return null;
  }
};

const url = "https://jsonplaceholder.typicode.com/todos";
const result = queryRetry(urlQuery(url), maxRetry, delay, useIncrement);
result.then((r) => console.log(r)).catch((e) => console.log("EEEE"));

module.exports = { result };
