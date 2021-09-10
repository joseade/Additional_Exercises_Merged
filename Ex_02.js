const urlQuery = (url) => () => fetch(url);
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

module.exports = { queryRetry, urlQuery };
