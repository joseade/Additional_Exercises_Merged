const { LinkedList, isPalindrome } = require("./Ex_17.js");

const ll = new LinkedList();
ll.insert(400);
ll.insert(200);
ll.insert(200);
ll.insert(400);

const llTwo = new LinkedList();
llTwo.insert(5);
llTwo.insert(0);
llTwo.insert(3);

test("Finding the node at the beginning of a loop ", () => {
  expect(isPalindrome(ll)).toBeTruthy();
  expect(isPalindrome(llTwo)).toBeFalsy();
});
