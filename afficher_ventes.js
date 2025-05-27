document.addEventListener("DOMContentLoaded", () => {
  const savedSales = JSON.parse(localStorage.getItem("salesRows")) || [];
  const tbody = document.querySelector("#salesTable tbody");

  savedSales.forEach((sale, index) => {
    addRowToTable(sale, index);
  });
});

function addRowToTable({ date, contact, produit_id, vendu_offert, quantite, prix, commentaire }, index) {
  const tbody = document.querySelector("#salesTable tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td><button class="delete-btn" data-index="${index}">🗑️</button></td>
    <td>${date}</td>
    <td>${contact}</td>
    <td>${produit_id}</td>
    <td>${vendu_offert}</td>
    <td>${quantite}</td>
    <td>${prix}</td>
    <td>${commentaire}</td>
  `;

  tbody.appendChild(row);
}

// Deletion handler
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const index = parseInt(event.target.getAttribute("data-index"));
    const savedSales = JSON.parse(localStorage.getItem("salesRows")) || [];
    savedSales.splice(index, 1);
    localStorage.setItem("salesRows", JSON.stringify(savedSales));
    location.reload();
  }
});
