const colorInput = document.getElementById("colorInput");
const colorPreview = document.getElementById("colorPreview");
const hexCode = document.getElementById("hexCode");
const rgbCode = document.getElementById("rgbCode");

colorInput.addEventListener("input", () => {
  const hex = colorInput.value;
  hexCode.textContent = hex;
  rgbCode.textContent = hexToRgb(hex);
  colorPreview.style.backgroundColor = hex;
});

function hexToRgb(hex) {
  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

function copyToClipboard(id) {
  const text = document.getElementById(id).textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert(`${text} copied to clipboard!`);
  });
}


