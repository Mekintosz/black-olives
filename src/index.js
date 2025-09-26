import { initNav } from "./modules/nav.js";
import { initBookingDateValidation } from "./modules/bookingDate.js";

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initBookingDateValidation();
});
