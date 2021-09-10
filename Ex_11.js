const querySelectorAll = (selector) => {
  const regex = /[^<]+/g;
  const splitSelector = selector.match(regex);
  const parentSelector = splitSelector[0].slice(0, -1);
  const childSelector = splitSelector[1].slice(1);
  if (parentSelector === "") {
    return document.querySelectorAll(childSelector);
  }
  const parents = Array.from(document.querySelectorAll(childSelector)).map(
    (child) => child.closest(parentSelector)
  );
  return parents;
};

module.exports = {
  querySelectorAll,
};
