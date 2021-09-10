/**
 *  @jest-environment jsdom
 */
const { Triangle, printTriangle } = require("./Ex_20.js");

test(" Sierpiński triangle", () => {
  document.body.innerHTML = `<div class="container"></div>
    <form style="margin-top: 50px">
      <label for="iteration">Select the number of iterations</label>
      <input id="iteration" type="number" name="it" min="1" />
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </form>`;
  printTriangle(1);
  expect(document.querySelectorAll(".container-fractal").length).toBe(1);
  document.body.innerHTML = `<div class="container"></div>
    <form style="margin-top: 50px">
      <label for="iteration">Select the number of iterations</label>
      <input id="iteration" type="number" name="it" min="1" />
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </form>`;
  printTriangle(2);
  expect(document.querySelectorAll(".container-fractal").length).toBe(4);
  document.body.innerHTML = `<div class="container"></div>
    <form style="margin-top: 50px">
      <label for="iteration">Select the number of iterations</label>
      <input id="iteration" type="number" name="it" min="1" />
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </form>`;
  printTriangle(3);
  expect(document.querySelectorAll(".container-fractal").length).toBe(13);
  document.body.innerHTML = `<div class="container"></div>
    <form style="margin-top: 50px">
      <label for="iteration">Select the number of iterations</label>
      <input id="iteration" type="number" name="it" min="1" />
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </form>`;
  printTriangle(4);
  expect(document.querySelectorAll(".container-fractal").length).toBe(40);
});
