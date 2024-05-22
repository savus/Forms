document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    const target = e.target;
    const dropdownContainer = "[data-dropdown]";
    const dropdownButton = "[data-dropdown-button]";
    const dropdownMenu = "[data-dropdown-menu]";
    const isDropdownButton = target.matches(dropdownButton);

    if (!isDropdownButton && target.closest(dropdownContainer) != null) return;

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = target.closest(dropdownContainer);
      currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll(dropdownContainer).forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove("active");
    });
  });
});
