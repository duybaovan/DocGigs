document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.getElementsByTagName("input");
  for (let input of inputs) {
    if (input.type === "text") {
      input.value = "Your Value";
    }
    // Add more conditions for other field types like email, checkbox, etc.
  }
});
