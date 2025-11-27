const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

if (btn && menu) {
  btn.addEventListener("click", () => {
    const isOpen = menu.classList.contains("opacity-100");

    if (isOpen) {
      // Close menu
      menu.classList.remove(
        "opacity-100",
        "translate-y-0",
        "pointer-events-auto"
      );
      menu.classList.add("opacity-0", "-translate-y-4", "pointer-events-none");
    } else {
      // Open menu
      menu.classList.remove(
        "opacity-0",
        "-translate-y-4",
        "pointer-events-none"
      );
      menu.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");
    }
  });
}
