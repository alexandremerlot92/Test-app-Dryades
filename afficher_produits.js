// afficher_produits.js

document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#productTable tbody");
  
  db.collection("products").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      addRowToTable(data, doc.id); // doc.id = unique Firebase ID
    });
  });
});

function addRowToTable({ id, cuvee, millesime, prix, quantite_bouteilles }, docId) {
  const tbody = document.querySelector("#productTable tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td><button class="delete-btn" data-index="${docId}">🗑️</button></td>
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
    const docId = event.target.getAttribute("data-index");
    db.collection("products").doc(docId).delete().then(() => {
      location.reload(); // Refresh table
    });
  }
});
