const querySelectorAll = (selector) => {
  const newSelector = selector.replace(/</g, ">");
  const children = document.querySelectorAll(newSelector);
  const parents = Array.from(children).map((children) => children.parentNode);
  return parents;
};

console.log(querySelectorAll("div.note < input.is-complete[checked]"));

module.exports = {
  querySelectorAll,
};
