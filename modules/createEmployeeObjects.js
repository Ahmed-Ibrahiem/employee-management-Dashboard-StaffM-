import { Person } from "../js/main.js";

export const createEmployeeObjects = (arr_of_data) => {
  // Create AlEmployee Objects from person constractorl
  arr_of_data.forEach((empData) => {
    const employee = new Person(
      empData.id,
      empData.first_name,
      empData.last_name,
      empData.status,
      empData.contact_number,
      empData.email,
      empData.location,
      empData.profile_image,
      empData.job_title,
      empData.category,
      empData.birthday,
      empData.type,
      empData.team_leader,
      empData.role,
      empData.productive,
      empData.joining_date,
      empData.salary,
      empData.work_type
    );
  });
};
