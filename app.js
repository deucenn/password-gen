// Slider Value Change
const sliderElement = document.querySelector(".slider")
const sliderValue = document.querySelector(".value")

sliderElement.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value;
  sliderValue.textContent = tempSliderValue;

  const progress = (tempSliderValue / sliderElement.max) * 100;


  return progress;
});