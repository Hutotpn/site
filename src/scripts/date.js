const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

const copyrightYearEl = document.getElementById("copyright-year");
if (copyrightYearEl) {
  copyrightYearEl.textContent = new Date().getFullYear().toString();
}

const monthEl = document.getElementById("month");
if (monthEl) {
  monthEl.textContent = String(new Date().getMonth() + 1).padStart(2, "0");
}

const dayEl = document.getElementById("day");
if (dayEl) {
  dayEl.textContent = String(new Date().getDate()).padStart(2, "0");
}
