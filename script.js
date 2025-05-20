document.getElementById("activityForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting the usual way

  // Get input values
  const date = document.getElementById("date").value;
  const cuvee = document.getElementById("cuvee").value;
  const millesime = document.getElementById("millesime").value;
  const quantite = document.getElementById("quantite").value;

  // Check if all fields are filled out
  if (date && cuvee && millesime && quantite) {
    // Create a new row for the table
    const newRow = document.createElement("tr");

    // Create new cells for each column and add the input values
    const dateCell = document.createElement("td");
    dateCell.textContent = date;
    newRow.appendChild(dateCell);

    const cuveeCell = document.createElement("td");
    cuveeCell.textContent = cuvee;
    newRow.appendChild(cuveeCell);

    const millesimeCell = document.createElement("td");
    millesimeCell.textContent = millesime;
    newRow.appendChild(millesimeCell);

    const quantiteCell = document.createElement("td");
    quantiteCell.textContent = quantite;
    newRow.appendChild(quantiteCell);

    // Add the new row to the table
    document.querySelector("#activityTable tbody").appendChild(newRow);

    // Reset the form fields
    document.getElementById("activityForm").reset();
  } else {
    alert("Please fill out all fields.");
  }
});