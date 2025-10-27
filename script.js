function handleTrackForm(event) {
  event.preventDefault();

  // get values and trim whitespace
  const start = document.getElementById("start").value.trim();
  const dest = document.getElementById("destination").value.trim();
  const result = document.getElementById("track-result");

  // simple validation
  if (!start || !dest) {
    result.textContent = "Please enter both start and destination!";
    result.style.color = "#555"; // error color
    return false;
  }

  // Use a template literal (backticks) so ${start} and ${dest} are interpolated
  result.textContent = `Tracking your bus from ${start} to ${dest}... 🚍`;
  result.style.color = "#777"; // success color

  // Optionally: scroll result into view smoothly
  result.scrollIntoView({ behavior: "smooth", block: "center" });

  return false; // keep the page from reloading
}
