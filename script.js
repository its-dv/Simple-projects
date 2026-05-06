"use strict";

// script.js - index.html
const textarea = document.getElementById("notepad");

// Save text in localStorage
function saveText() {
  if (textarea.value !== "") {
    localStorage.setItem("notepadContent", textarea.value);
    showToast("Text saved");
  } else {
    showToast("Nothing to save");
  }

  updateUI();
}

// Load text from localStorage
function loadText() {
  const saved = localStorage.getItem("notepadContent");
  if (saved !== null) {
    textarea.value = saved;
    showToast("Text loaded");
  } else {
    showToast("Nothing saved yet");
  }

  updateUI();
}

// Clear the notepad
function clearNotepad() {
  if (textarea.value !== "") {
    showToast("Text cleared");
    textarea.value = "";
    localStorage.removeItem("notepadContent");
  } else {
    showToast("Text already cleared");
  }

  updateUI();
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

// Show a message about saving/loading/clearing
function showToast(text) {
  const el = document.getElementById("toast");
  el.textContent = text;
  el.classList.add("show");

  setTimeout(() => {
    el.classList.remove("show");
  }, 2000);
}

// Text auto-load when the page is opened
window.onload = () => {
  const saved = localStorage.getItem("notepadContent");
  if (saved) {
    textarea.value = saved;
  }
}

// Theme auto-load when the page is opened
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

const btn = document.getElementById("translateButton");
const menu = document.getElementById("dropdownTranslate");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Character counter
function countCharacters() {
  const characters = textarea.value;
  let count = 0;
  for (let i = 0; i < characters.length; i++) {
    count++;
  }
  document.getElementById("characterCounter").textContent = translate("characterCounter") + count;
}

document.addEventListener("DOMContentLoaded", () => {
  updateUI();
});

textarea.addEventListener("input", () => {
  countCharacters();
});

function updateUI() {
  countCharacters();
}

// Translations
const translations = {
  en: {
    save: "Save",
    load: "Load",
    clear: "Clear",
    languages: "Languages",
    rights: "© 2026 Simple Notepad. All rights not reserved.",
    textarea: "Write your notes here...",
    characterCounter: "Character count: ",
    characterCounterError: "Character count: something went wrong..."
  },
  de: {
    save: "Speichern",
    load: "Laden",
    clear: "Löschen",
    languages: "Sprachen",
    rights: "© 2026 Simple Notepad. Alle Rechte nicht reserviert.",
    textarea: "Schreiben Sie Ihre Notizen hier...",
    characterCounter: "Zeichenanzahl: ",
    characterCounterError: "Zeichenanzahl: etwas ist schief gelaufen..."
  },
  fr: {
    save: "Enregistrer",
    load: "Charger",
    clear: "Effacer",
    languages: "Langues",
    rights: "© 2026 Simple Notepad. Tous droits non réservés.",
    textarea: "Écrivez vos notes ici...",
    characterCounter: "Nombre de caractères : ",
    characterCounterError: "Nombre de caractères : quelque chose s'est mal passé..."
  },
  ru: {
    save: "Сохранить",
    load: "Загрузить",
    clear: "Очистить",
    languages: "Языки",
    rights: "© 2026 Simple Notepad. Все права не защищены.",
    textarea: "Напишите свои заметки здесь...",
    characterCounter: "Количество символов: ",
    characterCounterError: "Количество символов: что-то пошло не так..."
  }
};

document.querySelectorAll('input[name="language"]').forEach(input => {
  input.addEventListener("change", (e) => {
    const lang = e.target.value;
    changeLanguage(lang);
  });
});

let currentLang = localStorage.getItem("lang") || "en";

function translate(key) {
  return translations[currentLang][key] || key;
}

function updateTexts() {
  // Simple text content
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = translate(el.dataset.i18n);
  });

  // Placeholder text content
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = translate(el.dataset.i18nPlaceholder);
  });
}

function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  updateTexts();
  updateUI()
}

updateTexts();

document.querySelector(`input[value="${currentLang}"]`).checked = true;