import { close_menu, toggle_menu } from "./handleMenuStatus.js";
import { Person } from "../js/main.js";
import { getData } from "./getData.js";
import { createEmployeeObjects } from "./createEmployeeObjects.js";
import { renderEmployeeInTable } from "./renderEmployeesInTable.js";
import { handleAddEmployeeBtnStatus } from "./handleAddEmployeeBtnStatus.js";
import { handleCheckBoxInTable } from "./handleCheckBoxInTable.js";
import { updateLocalStorage } from "./UpdateLocalStorage.js";
import { deleteEmployee } from "./deleteEmployee.js";

const all_filter_menu = Array.from(
  document.querySelectorAll(".filter_section")
);
const tbody = document.querySelector(
  ".manage_content .table_container table tbody"
);
const add_employee_btn = document.querySelector(".new_employee");
const master_checkbox = document.querySelector(".master_checkbox");

let actual_employees;

if (localStorage.actual_employees !== undefined) {
  actual_employees = JSON.parse(localStorage.actual_employees);
} else {
  actual_employees = [];
}

// start Programming
async function processData() {
  // storage the pormise data in the employeeData to reused it
  let employeeData = await getData();

  // If actual_employees is empty so push json data in it , else don't do any thing
  if (actual_employees.length == 0) {
    employeeData.map((data) => {
      actual_employees.push(data);
      updateLocalStorage(actual_employees);
    });
  }

  // Create AlEmployee Objects from person constractorl
  createEmployeeObjects(actual_employees);

  // render employees Info in the table
  renderEmployeeInTable(Person.all_employees, tbody);
  const all_checkbox_btn = Array.from(
    document.querySelectorAll(".check_box_id")
  ).map((td) => td.querySelector("input"));

  // addEventLestener for all_checkbox_btn to handleAddEmployeeBtnStatus when has any change of all_checkbox_btn
  all_checkbox_btn.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      handleAddEmployeeBtnStatus(add_employee_btn, all_checkbox_btn);
    });
  });

  // AddEventListener for master_checkbox
  master_checkbox.addEventListener("click", () => {
    handleCheckBoxInTable(master_checkbox, all_checkbox_btn);
    handleAddEmployeeBtnStatus(add_employee_btn, all_checkbox_btn);
  });

  // Handle Delete Employee Button
  add_employee_btn.addEventListener("click", () => {
    if (add_employee_btn.classList.contains("delete_status")) {
      // Get the all employees id thay are will deleted
      const all_checkbox_has_been_checked = all_checkbox_btn
        .filter((btn) => btn.checked == true)
        .map((btn) => Number.parseInt(btn.dataset.id));
      // delete Employee
      deleteEmployee(all_checkbox_has_been_checked);
      // Rerender the employees table
      renderEmployeeInTable(Person.all_employees, tbody);
    }
  });

  // Sort
}
processData();

all_filter_menu.map((btn) => {
  const menu = btn.querySelector(".filter_options");
  btn.addEventListener("click", () => toggle_menu(menu));
  document.addEventListener("pointerdown", (e) => {
    if (!menu.contains(e.target) && e.target !== btn) {
      close_menu(menu);
    }
  });
});
