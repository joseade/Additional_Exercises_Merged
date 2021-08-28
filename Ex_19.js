(function (global) {
  let root = document.getElementById("results");
  const result = (text, pass) => {
    const el = document.createElement("li");
    el.textContent = text;
    pass !== undefined && (el.style.color = pass ? "green" : "red");
    return el;
  };
  const assert = (pass, message) => {
    if (!root.id) {
      const name = message.split(" ").slice(-1)[0];
      root.dataset.test = name;
    }
    if (message.includes("delay")) {
      const name = message.split(" ").slice(-1)[0];
      const parent = document.querySelector(`[data-test='${name}']`);
      return parent.appendChild(result(message, pass));
    }
    return root.appendChild(result(message, pass));
  };
  function test(description, testBlock) {
    const parent = root;
    root = assert(undefined, description).appendChild(
      document.createElement("ul")
    );
    testBlock();
    root = parent;
  }
  global.assert = assert;
  global.test = test;
})(window);
