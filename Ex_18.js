function set(obj, path, value) {
  const re = /[^/.]+/g;
  const keys = path.match(re);
  let y = null;
  keys.forEach((key, index, arr) => {
    if (index === 0) {
      if (obj[key]) {
        if (obj[key].constructor.name !== "Object") {
          throw new Error("Path key cannot be created or assigned to");
        }
        y = obj[key];
        return;
      }
      obj[key] = { [arr[index + 1]]: {} };
      y = obj[key];
      return;
    }
    if (index === arr.length - 1) {
      y[key] = value;
      return;
    }
    if (y[key]) {
      if (y[key].constructor.name !== "Object") {
        throw new Error("Path key cannot be created or assigned to");
      }
      y = y[key];
    } else {
      y[key] = { [arr[index + 1]]: {} };
      y = y[key];
    }
  });
  return obj;
}

module.exports = {
  set,
};
