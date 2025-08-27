import { render_employees_card } from "../modules/render_employee_card.js";
import { getData } from "../modules/getData.js";
import { createEmployeeObjects } from "../modules/createEmployeeObjects.js";
import { Person } from "./main.js";

// start Programming
async function processData() {
  // storage the pormise data in the employeeData to reused it
  let employeeData = await getData();

  // Create AlEmployee Objects from person constractorl
  createEmployeeObjects(employeeData);

  // render employees card in browser
  render_employees_card(Person.all_employees);
}
processData();

// Open and close menu
document.querySelector(".menu_btn").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("open");
});
