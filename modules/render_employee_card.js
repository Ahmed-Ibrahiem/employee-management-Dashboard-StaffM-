import { createEmployeeCard } from "./createEmployeeCard.js";

export const render_employees_card = (arr ) => {
  // render employees card in browser
  arr.forEach((emp) => {
    const employee_card = createEmployeeCard(
      emp.id,
      emp.first_name,
      emp.last_name,
      emp.status,
      emp.contact_number,
      emp.email,
      emp.location,
      emp.profile_image,
      emp.job_title,
      emp.category,
      emp.birthday
    );
    document.querySelector('.cards_container').appendChild(employee_card);
  });
};
