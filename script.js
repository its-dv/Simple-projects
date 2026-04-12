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

// Clear the notepad
function clearNotepad() {
  textarea.value = "";
  localStorage.removeItem("notepadContent");
  alert("Cleared!");
}

// Switch between light and dark themes
function switchTheme() {
  document.body.classList.toggle("dark");

  const icon = document.getElementById("themeIcon");

  if (document.body.classList.contains("dark")) {
    icon.src = "images/sun.svg";
  } else {
    icon.src = "images/moon.svg";
  }

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  }
  else {
    localStorage.setItem("theme", "light");
  }
}

// Auto-load when the page is opened
window.onload = () => {
  const saved = localStorage.getItem("notepadContent");
  if (saved) {
    textarea.value = saved;
  }
}

// Auto-load theme preference and icon
window.onload = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
  }
  const icon = document.getElementById("themeIcon");
  if (document.body.classList.contains("dark")) {
    icon.src = "images/sun.svg";
  }
};