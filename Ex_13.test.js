const { Tree, isSameLevel } = require("./Ex_13.js");

const t = new Tree(0);
t.insertChild(1);
const t2 = t.insertChild(2);
const t3 = t.insertChild(3);
t.insertChild(5);
const t7 = t.insertChild(7);
t2.insertChild(1);
const t25 = t2.insertChild(5);
t3.insertChild(0);
const t73 = t7.insertChild(3);
t25.insertChild(3);
const t255 = t25.insertChild(5);
t25.insertChild(9);
t73.insertChild(3);
const t730 = t73.insertChild(0);
t255.insertChild(6);
t730.insertChild(9);
t730.insertChild(4);

test("Nodes are found at the same depth", () => {
  expect(isSameLevel(t, 1, 1)).toBeFalsy();
  expect(isSameLevel(t, 3, 3)).toBeTruthy();
  expect(isSameLevel(t, 6, 4)).toBeTruthy();
});
