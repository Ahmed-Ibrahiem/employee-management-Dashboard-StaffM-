export class Person {
  static all_employees = [];
  constructor(
    id,
    first_name,
    last_name,
    status,
    contact_number,
    email,
    location,
    profile_image,
    job_title,
    category,
    birthday,
    type,
    team_leader,
    role,
    productive,
    joining_date,
    salary,
    work_type
  ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.profile_image = profile_image;
    this.contact_number = contact_number;
    this.status = status;
    this.email = email;
    this.location = location;
    this.job_title = job_title;
    this.category = category;
    this.birthday = birthday;
    this.type = type;
    this.team_leader = team_leader;
    this.role = role;
    this.productive = productive;
    this.joining_date = joining_date;
    this.salary = salary;
    this.work_type = work_type;
    Person.all_employees = [...Person.all_employees, this];
  }

  getFullName = () => {
    return `${this.first_name} ${this.last_name}`;
  };

  deleteEmployee = () => {
    const index = Person.all_employees.findIndex((emp) => emp.id === this.id);
    if (index !== -1) {
      Person.all_employees.splice(index, 1);
    }
  };

  checkTheValidPhone = () => {
    if (this.contact_number.length > 12) {
      return {
        isValid: false,
        massage: `The phone number is uncorrect becouse it's bigger then 12 numbers`,
      };
    } else if (this.contact_number.length < 12) {
      return {
        isValid: false,
        massage: `The phone number is uncorrect becouse it's smoller then 12 numbers`,
      };
    } else if (this.contact_number.length === 12) {
      return {
        isValid: true,
        massage: `The phone number is valid`,
      };
    }
  };

  checkValidEmail = () => {
    if (this.email.slice(-3) === "com") {
      return { isValid: true, massage: "The email is valid" };
    } else {
      return { isValid: false, massage: "The email is not valid" };
    }
  };
}
