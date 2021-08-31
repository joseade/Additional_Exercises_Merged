/**
 *  @jest-environment jsdom
 */
const { querySelectorAll } = require("./Ex_11.js");
test("Determine if a tree is a symmetric", () => {
  const element = document.createElement("section");
  document.body.append(element);
  element.innerHTML = `<div id="1" class="note"><input type="checkbox" class="is-complete"
  checked> </div>
     <div id="2" class="note"></div>
     <div id="3" class="note"><input type="checkbox" class="is-complete"
  checked></div>
     <div id="4" class="note"></div>
     <div id="5" class="note"><input type="checkbox" class="is-complete"
  checked></div>
      <div id="6" class="note">
      <span><a>Hello</a></span>
      </div>`;

  expect(querySelectorAll("div.note < input.is-complete[checked]").length).toBe(
    3
  );
  expect(querySelectorAll("div.note < span a").length).toBe(1);
});
