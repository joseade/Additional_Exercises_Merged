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

module.exports = { cancellableFetch };
