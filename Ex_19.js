(function (global) {
  let root = document.getElementById("results");
  const result = (text, pass) => {
    const el = document.createElement("li");
    el.textContent = text;
    pass !== undefined && (el.style.color = pass ? "green" : "red");
    return el;
  };
  const assert = (pass, message) => root.appendChild(result(message, pass));
  function test(description, testBlock) {
    const parent = root;
    root = assert(undefined, description).appendChild(
      document.createElement("ul")
    );
    testBlock();
    root = parent;
  }

  const originalSetTimeout = global.setTimeout;
  const newsetTimeout = (fn, delay, ...params) => {
    const newCB = (prevRoot) => () => {
      root = prevRoot;
      fn(...params);
    };
    originalSetTimeout(newCB(root), delay);
  };

  global.assert = assert;
  global.test = test;
  global.setTimeout = newsetTimeout;
})(window);
