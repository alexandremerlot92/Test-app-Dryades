// Load saved rows from localStorage
window.addEventListener("DOMContentLoaded", () => {
  const savedRows = JSON.parse(localStorage.getItem("stockRows")) || [];
  savedRows.forEach(row => addRowToTable(row));
});