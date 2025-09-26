export function initNav() {
  const menuButton = document.getElementById("menu-button");
  const navigation = document.querySelector(".header__nav");

  if (!menuButton || !navigation) return;

  const navLinks = navigation.querySelectorAll("a");

  const setExpanded = (expanded) => {
    menuButton.setAttribute("aria-expanded", String(expanded));
    menuButton.setAttribute(
      "aria-label",
      expanded ? "Close menu" : "Open menu"
    );
  };

  const toggleMenu = () => {
    const isOpen = navigation.classList.toggle("active");
    setExpanded(isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
    document.body.classList.toggle("menu-open", isOpen);
  };

  menuButton.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navigation.classList.contains("active")) {
        navigation.classList.remove("active");
        setExpanded(false);
        document.body.style.overflow = "";
        document.body.classList.remove("menu-open");
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navigation.classList.contains("active")) {
      navigation.classList.remove("active");
      setExpanded(false);
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    }
  });
}
