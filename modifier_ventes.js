// Get references
document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("produit_id");
  const products = JSON.parse(localStorage.getItem("productRows")) || [];

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = `${product.id} - ${product.cuvee} ${product.millesime}`;
    productSelect.appendChild(option);
  });
});

const form = document.getElementById("salesForm");

// Listen for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const date = document.getElementById("date").value;
  const contact = document.getElementById("contact").value;
  const produit_id = document.getElementById("produit_id").value;
  const vendu_offert = document.getElementById("vendu_offert").value;
  const quantite = document.getElementById("quantite").value;
  const prix = document.getElementById("prix").value;
  const commentaire = document.getElementById("commentaire").value;

  if (date && contact && produit_id && vendu_offert && quantite && prix) {
    const rowData = { date, contact, produit_id, vendu_offert, quantite, prix, commentaire};

    // Save to localStorage
    const savedSales = JSON.parse(localStorage.getItem("salesRows")) || [];
    savedSales.push(rowData);
    localStorage.setItem("salesRows", JSON.stringify(savedSales));

    // Reset the form fields
    form.reset();

    alert("Entrée ajoutée avec succès !");
  } else {
    alert("Veuillez remplir tous les champs obligatoires.");
  }
});