function toggleContent() {
  const content = document.getElementById("more-content");
  const button = document.getElementById("toggle-btn");

  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    button.textContent = "Show Less";
  } else {
    content.classList.add("hidden");
    button.textContent = "Show More";
  }
}
