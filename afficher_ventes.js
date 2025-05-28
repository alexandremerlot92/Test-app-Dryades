document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#salesTable tbody");

  db.collection("sales").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      addRowToTable(data, doc.id); // doc.id = unique Firebase ID
    });
  });
});


function addRowToTable({ date, contact, cuvee, millesime, vendu_offert, quantite, prix, commentaire }, docId) {
  const tbody = document.querySelector("#salesTable tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td><button class="delete-btn" data-index="${docId}">🗑️</button></td>
    <td>${date}</td>
    <td>${contact}</td>
    <td>${cuvee}</td>
    <td>${millesime}</td>
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
    const docId = event.target.getAttribute("data-index");
    db.collection("sales").doc(docId).delete().then(() => {
      location.reload(); // Refresh table
    });
  }
});