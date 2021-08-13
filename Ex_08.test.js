const { oldObj, flattenImperative, flattenFunctional } = require("./Ex_08.js");

test("Flatten an object", () => {
  expect(flattenImperative(oldObj, "oldObj")).toStrictEqual({
    oldObj_name: "Sara",
    oldObj_gender: "Apache Attack Helicopter",
    oldObj_address_location_city: "SF",
    oldObj_address_location_state: "CA",
    oldObj_address_preferredLocation_city: "SF",
    oldObj_address_preferredLocation_state: ["CA", "MN"],
    oldObj_address_other: undefined,
  });
  expect(flattenFunctional(oldObj, "oldObj")).toStrictEqual({
    oldObj_name: "Sara",
    oldObj_gender: "Apache Attack Helicopter",
    oldObj_address_location_city: "SF",
    oldObj_address_location_state: "CA",
    oldObj_address_preferredLocation_city: "SF",
    oldObj_address_preferredLocation_state: ["CA", "MN"],
    oldObj_address_other: undefined,
  });
});
