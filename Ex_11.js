const querySelectorAll = (selector) => {
  const regex = /[^<]+/g;
  const [parentSelector, childSelector] = selector.match(regex);

  if (!childSelector) return document.querySelectorAll(selector);

  let children = document.querySelectorAll(
    parentSelector + ">" + childSelector
  );

  let parents = Array.from(children).map((child) =>
    child.closest(parentSelector)
  );

  return parents;
};

module.exports = {
  querySelectorAll,
};
