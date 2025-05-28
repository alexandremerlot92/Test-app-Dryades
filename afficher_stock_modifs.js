document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.querySelector("#stockTable tbody");
    db.collection("stock").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      addRowToTable(data, doc.id); // doc.id = unique Firebase ID
    });
  });
});

  function addRowToTable({ date, cuvee, millesime, quantite, commentaire }, docId) {
    const tbody = document.querySelector("#stockTable tbody");
    const row = document.createElement("tr");

    row.innerHTML = `
      <td><button class="delete-btn" data-index="${docId}">🗑️</button></td>
      <td>${date}</td>
      <td>${cuvee}</td>
      <td>${millesime}</td>
      <td>${quantite}</td>
      <td>${commentaire}</td>
    `;

    tbody.appendChild(row);
  }

  // Deletion handler
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const docId = event.target.getAttribute("data-index");
    db.collection("stock").doc(docId).delete().then(() => {
      location.reload(); // Refresh table
    });
  }
});
