// Create function to handle all checkbox state depend on the master_checkbox status
export const handleCheckBoxInTable = (master_btn, all_checkbox) => {
  all_checkbox.map((checkbox) => {
    checkbox.checked = master_btn.checked;
  });
};

