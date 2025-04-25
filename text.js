const textarea = document.getElementById("default");

const params = new URLSearchParams(window.location.search);
const tableText = decodeURIComponent(params.get("data") || "");
const fullName = decodeURIComponent(params.get("name") || "").toUpperCase(); // from extractName() in sender
const provincialOfficer = decodeURIComponent(params.get("officer") || "").toUpperCase(); // from extractName() in sender
const officerName = provincialOfficer || provincial_officer; // Use the officer name if available
document.title = fullName;

const month = decodeURIComponent(params.get("month") || "");
const year = decodeURIComponent(params.get("year") || "");
console.log(`${month} ${year}`);


// Replace full_name and po_name placeholders
textarea.value = textarea.value
    .replaceAll("[full_name]", fullName)
    .replaceAll("[po_name]", provincialOfficer)    
    .replaceAll("[month]", month)
    .replaceAll("[yy]", year);

// Process and replace time logs
if (tableText) {
    const rows = tableText.trim().split('\n');

    rows.forEach(row => {
        const [date, amIn, amOut, pmIn, pmOut] = row.split(',');

        if (date) {
            textarea.value = textarea.value
                .replaceAll(`[amin_${date}]`, amIn || "")
                .replaceAll(`[amout_${date}]`, amOut || "")
                .replaceAll(`[pmin_${date}]`, pmIn || "")
                .replaceAll(`[pmout_${date}]`, pmOut || "");
        }
    });
}



// merge cell

const row = document.querySelector("#row1");
  const cells = row.querySelectorAll("td");

  // Merge the first three cells
  cells[1].colSpan = 3;
  cells[1].textContent = `${cells[1].textContent} ${cells[2].textContent} ${cells[3].textContent} ${cells[4].textContent}`;

  // Remove the now-redundant cells
  cells[2].remove();
  cells[3].remove();
  cells[4].remove();

