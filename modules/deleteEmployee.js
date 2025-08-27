import { Person } from "../js/main.js";
import { renderEmployeeInTable } from "./renderEmployeesInTable.js";
import { updateLocalStorage } from "./UpdateLocalStorage.js";

export const deleteEmployee = (arr) => {
  // Bring employees whose serial number applies with the number on the arr
  const all_employees = Person.all_employees.filter((data) =>
    arr.includes(data.id)
  );
  all_employees.map(emp => {
    emp.deleteEmployee()
    updateLocalStorage(Person.all_employees)
  })
};
