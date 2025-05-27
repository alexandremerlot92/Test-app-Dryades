// afficher_produits.js

document.addEventListener("DOMContentLoaded", () => {
  const savedProduct = JSON.parse(localStorage.getItem("productRows")) || [];
  const tbody = document.querySelector("#productTable tbody");

  savedProduct.forEach((product, index) => {
    addRowToTable(product, index);
  });
});

function addRowToTable({ id, cuvee, millesime, prix, quantite_bouteilles }, index) {
  const tbody = document.querySelector("#productTable tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td><button class="delete-btn" data-index="${index}">🗑️</button></td>
    <td>${id}</td>
    <td>${cuvee}</td>
    <td>${millesime}</td>
    <td>${prix}</td>
    <td>${quantite_bouteilles}</td>
  `;

  tbody.appendChild(row);
}

// Deletion handler
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const index = parseInt(event.target.getAttribute("data-index"));
    const savedProduct = JSON.parse(localStorage.getItem("productRows")) || [];
    savedProduct.splice(index, 1);
    localStorage.setItem("productRows", JSON.stringify(savedProduct));
    location.reload();
  }
});
