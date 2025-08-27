export const open_menu = (menu) => {
  menu.hidden = false;
};
export const close_menu = (menu) => {
  menu.hidden = true;
};
export const toggle_menu = (menu) => {
  if (menu.hidden) open_menu(menu);
  else close_menu(menu);
};
