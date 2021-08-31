const querySelectorAll = (selector) => {
  const regex = /[^<]+/g;
  const splitSelector = selector.match(regex);
  const parentSelector = splitSelector[0].slice(0, -1);
  const childSelector = splitSelector[1].slice(1);
  const possibleParents = document.querySelectorAll(parentSelector);
  const parents = [];
  possibleParents.forEach((possibleParent) => {
    if (possibleParent.querySelector(childSelector)) {
      parents.push(possibleParent);
    }
  });

  return parents;
};

module.exports = {
  querySelectorAll,
};
