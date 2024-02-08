const API_URL = "https://api.adviceslip.com/advice";

const adviceElement = document.getElementById("advice");
const adviceNoElement = document.getElementById("adviceID");

const buttonDice = document.getElementById("buttonDice");

async function fetchAdvice() {
  const response = await fetch(API_URL);
  const { slip } = await response.json();
  adviceNoElement.innerText = `ADVICE #${slip.id}`;
  adviceElement.innerText = `"${slip.advice}"`;
}
window.addEventListener("load", fetchAdvice);
buttonDice.addEventListener("click", fetchAdvice);
