function checkAnswer() {
  const input = document.getElementById("answer").value.toLowerCase().trim();
  const error = document.getElementById("error");

  // Change this to whatever word you choose
  const correctAnswer = "equity";

  if (input === correctAnswer) {
    window.location.href = "story.html";
  } else {
    error.textContent = "Access denied. Interpretation required.";
  }
}
