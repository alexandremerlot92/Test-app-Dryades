// modifier_produits.js

// Get references
const form = document.getElementById("productForm");

// Listen for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const id = document.getElementById("id").value;
  const cuvee = document.getElementById("cuvee").value;
  const millesime = document.getElementById("millesime").value;
  const prix = document.getElementById("prix").value;
  const quantite_bouteilles = document.getElementById("quantite_bouteilles").value;

  if (id && cuvee && millesime && prix && quantite_bouteilles) {
    const rowData = { id, cuvee, millesime, prix, quantite_bouteilles };

    // Save to Storage
    console.log("Submitting row:", rowData);
    db.collection("products").add(rowData)
	  .then(() => {
	    alert("Produit ajouté !");
	    form.reset();
	  })
	  .catch((error) => {
	    console.error("Erreur lors de l'ajout :", error);
	    alert("Erreur : " + error.message);
	  });

  }
});