document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    const target = e.target;
    const dropdownContainer = ".dropdown-js [data-dropdown]";
    const dropdownButton = ".dropdown-js [data-dropdown-button]";
    const dropdownMenu = ".dropdown-js [data-dropdown-menu]";
    const isDropdownButton = target.matches(dropdownButton);

    const registrationModalLink = document.querySelector(
      ".dropdown-js [data-modal-link='registration']"
    );

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

    registrationModalLink.addEventListener("click", function () {
      const modal = document.querySelector(
        `[data-modal=${this.dataset.modalLink}]`
      );
      if (!modal) throw new Error("could not find modal");
      modal.classList.add("active");
    });
  });
});
