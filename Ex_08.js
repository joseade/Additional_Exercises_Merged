function flattenImperative(oldObject, parentName) {
  let result = {};
  for (const [key, value] of Object.entries(oldObject)) {
    const tempKey = `${parentName}_${key}`;
    if (typeof value !== "object" || Array.isArray(value)) {
      result[tempKey] = value;
    } else {
      result = { ...result, ...flattenImperative(value, tempKey) };
    }
  }
  return result;
}
function flattenFunctional(oldObject, parentName) {
  return Object.entries(oldObject).reduce((acc, e) => {
    const [key, value] = e;
    const tempKey = `${parentName}_${key}`;
    if (typeof value !== "object" || Array.isArray(value)) {
      return { ...acc, [tempKey]: value };
    } else {
      return { ...acc, ...flattenFunctional(value, tempKey) };
    }
  }, {});
}

module.exports = {
  flattenImperative,
  flattenFunctional,
};
