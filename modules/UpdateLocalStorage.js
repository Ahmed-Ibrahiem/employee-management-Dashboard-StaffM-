export const updateLocalStorage = (arr) => {
  localStorage.actual_employees = JSON.stringify(arr);
};
