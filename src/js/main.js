document.addEventListener("DOMContentLoaded", () => {
  const dropdownContainer = ".dropdown-js [data-dropdown]";
  const dropdownButton = ".dropdown-js [data-dropdown-button]";
  const modalOverlay = "[data-modal]";

  const deactivateAllActiveElements = (selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.classList.remove("active");
    });
  };

  const registrationModalLink = document.querySelector(
    ".dropdown-js [data-modal-link='registration']"
  );

  document.addEventListener("click", (e) => {
    const target = e.target;
    const isDropdownButton = target.matches(dropdownButton);
    const isModalOverlay = target.matches(modalOverlay);

    // if (!isDropdownButton && target.closest(dropdownContainer) != null) return;

    // let currentDropdown;
    // if (isDropdownButton) {
    //   currentDropdown = target.closest(dropdownContainer);
    //   currentDropdown.classList.toggle("active");
    // }

    // document.querySelectorAll(dropdownContainer).forEach((dropdown) => {
    //   if (dropdown === currentDropdown) return;
    //   dropdown.classList.remove("active");
    // });

    // if (isModalOverlay) deactivateAllActiveElements(modalOverlay);
  });

  // registrationModalLink.addEventListener("click", function () {
  //   const modal = document.querySelector(
  //     `[data-modal=${this.dataset.modalLink}]`
  //   );
  //   if (!modal) throw new Error("could not find modal");
  //   modal.classList.add("active");
  //   deactivateAllActiveElements(dropdownContainer);
  // });
});
