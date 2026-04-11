// script.js - index.html
const textarea = document.getElementById("notepad");

// Save text in localStorage
function saveText() {
  localStorage.setItem("notepadContent", textarea.value);
  alert("Saved!");
}

// Load text from localStorage
function loadText() {
  const saved = localStorage.getItem("notepadContent");
  alert("Loaded!");
  if (saved !== null) {
    textarea.value = saved;
  } else {
    alert("Nothing saved yet.");
  }
}

// Switch between light and dark themes
function switchTheme() {
  document.body.classList.toggle("dark");
}

// Auto-load when the page is opened
window.onload = () => {
  const saved = localStorage.getItem("notepadContent");
  if (saved) {
    textarea.value = saved;
  }
}