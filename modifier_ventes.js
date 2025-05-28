// Get references
document.addEventListener("DOMContentLoaded", async () => {
  const cuveeSelect = document.getElementById("cuvee");

  try {
    const snapshot = await db.collection("stock").get();

    snapshot.forEach(doc => {
      const data = doc.data();
      const option = document.createElement("option");
      option.value = data.cuvee; // use Firebase document ID
      option.textContent = `${data.cuvee}`;
      cuveeSelect.appendChild(option);
    });
  } catch (error) {
    console.error("Erreur lors du chargement de la cuvee :", error);
  }
});

const form = document.getElementById("salesForm");

// Listen for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const date = document.getElementById("date").value;
  const contact = document.getElementById("contact").value;
  const cuvee = document.getElementById("cuvee").value;
  const millesime = document.getElementById("millesime").value;
  const vendu_offert = document.getElementById("vendu_offert").value;
  const quantite = document.getElementById("quantite").value;
  const prix = document.getElementById("prix").value;
  const commentaire = document.getElementById("commentaire").value;

  if (date && contact && cuvee && millesime && vendu_offert && quantite && prix) {
    const rowData = { date, contact, cuvee, millesime, vendu_offert, quantite, prix, commentaire};

    /// Save to Storage
    console.log("Submitting row:", rowData);
    db.collection("sales").add(rowData)
      .then(() => {
        alert("Vente ajoutée !");
        form.reset();
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout :", error);
        alert("Erreur : " + error.message);
      });

  }
});