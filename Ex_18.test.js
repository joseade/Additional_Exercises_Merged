const { set } = require("./Ex_18.js");

const path = "path.to.deeply.nested.property";
const objA = { path: { to: { fruit: "a" }, house: "hi" }, mail: 8 };
const objB = {};
const objC = { path: "White" };

test(" Implementing shorthand deep object assignment", () => {
  expect(set(objA, path, 42)).toEqual({
    path: {
      to: { fruit: "a", deeply: { nested: { property: 42 } } },
      house: "hi",
    },
    mail: 8,
  });
  expect(set(objB, path, 42)).toEqual({
    path: { to: { deeply: { nested: { property: 42 } } } },
  });
  expect(() => set(objC, path, 42)).toThrow(
    "Path key cannot be created or assigned to"
  );
});
