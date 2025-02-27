document.addEventListener("DOMContentLoaded", function() {
  const text = "BIENVENUE SUR MON PORTFOLIO";
  let index = 0;
  const welcomeText = document.getElementById("welcome-text");

  function typeText() {
    if (index < text.length) {
      welcomeText.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, 100); // délai entre chaque lettre
    }
  }

  typeText();
});
