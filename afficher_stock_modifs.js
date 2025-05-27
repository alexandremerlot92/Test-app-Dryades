document.addEventListener("DOMContentLoaded", () => {
    const savedRows = JSON.parse(localStorage.getItem("stockRows")) || [];
    console.log("Loaded rows:", savedRows);
    const tbody = document.querySelector("#stockTable tbody");

    // Render each row
    savedRows.forEach((rowData, index) => {
      addRowToTable(rowData, index);
    });
  });

  function addRowToTable({ date, cuvee, millesime, quantite, commentaire }, index) {
    const tbody = document.querySelector("#stockTable tbody");
    const row = document.createElement("tr");

    row.innerHTML = `
      <td><button class="delete-btn" data-index="${index}">🗑️</button></td>
      <td>${date}</td>
      <td>${cuvee}</td>
      <td>${millesime}</td>
      <td>${quantite}</td>
      <td>${commentaire}</td>
    `;

    tbody.appendChild(row);
  }

  // Listen for delete clicks using event delegation
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      const index = parseInt(event.target.getAttribute("data-index"));

      // Remove from localStorage
      const savedRows = JSON.parse(localStorage.getItem("stockRows")) || [];
      savedRows.splice(index, 1);
      localStorage.setItem("stockRows", JSON.stringify(savedRows));

      // Refresh the page to re-render table
      location.reload();
    }
  })