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

    // Save to localStorage
    const savedProducts = JSON.parse(localStorage.getItem("productRows")) || [];
    savedProducts.push(rowData);
    localStorage.setItem("productRows", JSON.stringify(savedProducts));

    // Reset the form fields
    form.reset();

    alert("Entrée ajoutée avec succès !");
  } else {
    alert("Veuillez remplir tous les champs obligatoires.");
  }
});