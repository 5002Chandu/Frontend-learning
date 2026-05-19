document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll("nav ul li");
  const sections = document.querySelectorAll("main section");

  // Navigation click handling
  navItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      sections.forEach(section => section.style.display = "none");
      sections[index].style.display = "block";
    });
  });

  // Show only profile at start
  sections.forEach(section => section.style.display = "none");
  sections[0].style.display = "block";

  // Highlight overdue assignments
  const cards = document.querySelectorAll(".assignment-card");
  cards.forEach(card => {
    const dueText = card.querySelector("p").textContent;
    if (dueText.startsWith("Due:")) {
      const dueDate = new Date(dueText.replace("Due: ", ""));
      const today = new Date();
      if (dueDate < today) {
        card.style.border = "2px solid red";
      }
    }
  });
});
