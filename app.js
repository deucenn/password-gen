const password = document.querySelector("password");
const copyPassword = document.querySelector(".copy");
const regeneratePassword = document.querySelector(".regenerate");
const uppercaseEl = document.querySelector("#uppercase");
const lowercaseEl = document.querySelector("#lowercase");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");
const sliderEl = document.querySelector(".slider");
const sliderValue = document.querySelector(".value");

// Slider Value Change

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value;
  sliderValue.textContent = tempSliderValue;

  const progress = (tempSliderValue / sliderEl.max) * 100;

  return progress;
});

// Event Listeners
// upper = uppercaseEl.checked,
// lower = lowercaseEl.checked,
// number = numbersEl.checked,
// symbols = symbolsEl.checked,
// Copy Function

// Regenerate Function

// Input Values

function lower() {
  return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

function upper() {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

function number() {
  return String.fromCharCode(48 + Math.floor(Math.random() * 10));
}

function symbols() {
  const symbols = "!@#$%^&*";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Password Output

function generatePassword() {
  let genPassword = "";

  const optArr = [lower, upper, number, symbols];
}
