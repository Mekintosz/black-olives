const menuButton  = document.getElementById("menu-button")
const navigation = document.querySelector(".header__nav")
menuButton.addEventListener("click", () => navigation.classList.toggle("active"))