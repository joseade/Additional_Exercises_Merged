const cancellableFetch = (url) => {
  var controller = new AbortController();
  var signal = controller.signal;
  const request = fetch(url, { signal });

  return {
    then(res) {
      return request.then(res);
    },
    catch(err) {
      return request.catch(err);
    },
    cancel() {
      return controller.abort();
    },
  };
};

const url = "https://jsonplaceholder.typicode.com/todos";
const result = cancellableFetch(url);

const requestChain = result
  .then((data) => data.json())
  .then((res) => console.log(res))
  .catch((err) => {
    if (err.name === "FetchError") {
      return "Fetch request has been cancelled";
    }
  });

result.cancel();

module.exports = { requestChain };
