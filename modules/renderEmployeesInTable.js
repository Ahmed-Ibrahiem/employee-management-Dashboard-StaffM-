export const renderEmployeeInTable = (arr, document_container) => {
  document_container.innerHTML = ``;
  arr.map((data) => {
    const html = `
    <tr data-id="${data.id}">
      <td class="check_box_id" ><input data-id="${data.id}" type="checkbox" /></td>
      <td class="emp_id">${data.id}</td>
      <td><div class="box">${data.status}</div></td>
      <td><div class="box">${data.type}</div></td>
      <td><div class="box">${data.team_leader}</div></td>
      <td><div class="box">${data.role}</div></td>
      <td>
        <span></span>
        <p>${data.productive}%</p>
      </td>
      <td><div class="box">${data.joining_date}</div></td>
      <td>
        <div class="box">${data.salary}</div>
      </td>
      <td><div class="box">${data.work_type}</div></td>
    </tr>
    `;
    document_container.innerHTML += html;
  });
};
