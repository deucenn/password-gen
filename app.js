const resultEl = document.querySelector("#result");
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
});

// Event Listeners
copyPassword.addEventListener("click", () => {
  navigator.clipboard.writeText(resultEl.textContent);
  alert("Password Copied");
});

regeneratePassword.addEventListener("click", () => {
  const password = generatePassword();
  resultEl.textContent = password;
});

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
  const passwordLength = sliderEl.value;
  const options = [
    { func: lower, element: lowercaseEl },
    { func: upper, element: uppercaseEl },
    { func: number, element: numbersEl },
    { func: symbols, element: symbolsEl },
  ];

  // Filter out options with undefined or null elements and check their 'checked' property
  const validOptions = options.filter((option) => option.element && option.element.checked);
  const optCount = validOptions.length;

  if (optCount === 0) {
    return "Select at least one option";
  }

  let genPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomOption = validOptions[Math.floor(Math.random() * optCount)];
    genPassword += randomOption.func();
  }

  return genPassword;
}

// Call generatePassword function immediately when the script is loaded
const initialPassword = generatePassword();
resultEl.textContent = initialPassword;
