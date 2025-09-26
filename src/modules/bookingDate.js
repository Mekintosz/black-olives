export function initBookingDateValidation() {
  const dateInput = document.getElementById("date");
  if (!dateInput) return;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const toISODate = (d) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  dateInput.min = toISODate(tomorrow);

  const validateDate = () => {
    if (!dateInput.value) {
      dateInput.setCustomValidity("");
      return;
    }
    const selected = new Date(`${dateInput.value}T00:00:00`);
    selected.setHours(0, 0, 0, 0);

    if (selected <= today) {
      dateInput.setCustomValidity("Please select a future date.");
    } else if (selected.getDay() === 1) {
      // Monday
      dateInput.setCustomValidity(
        "We are closed on Mondays. Please choose another date."
      );
    } else {
      dateInput.setCustomValidity("");
    }
    dateInput.reportValidity();
  };

  dateInput.addEventListener("change", validateDate);
  dateInput.addEventListener("input", validateDate);

  const form = dateInput.closest("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      validateDate();
      if (!form.checkValidity()) {
        e.preventDefault();
      }
    });
  }
}
