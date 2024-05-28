// Store the CSS class for the theme in localStorage under this key
const themeKey = "theme";
const lightTheme = "theme-light";
const darkTheme = "theme-dark";

function getStoredTheme() {
  return localStorage.getItem(themeKey);
}

function getSystemTheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return darkTheme;
  } else {
    return lightTheme;
  }
}

function getTheme() {
  const stored = localStorage.getItem(themeKey);
  if (stored !== null) {
    return stored;
  } else {
    return getSystemTheme();
  }
}

function setTheme(theme) {
  if (theme === null) {
    document.body.className = getSystemTheme();
    localStorage.removeItem(themeKey);
  } else {
    document.body.className = theme;
    localStorage.setItem(themeKey, theme);
  }

  const optionElems = document.getElementsByClassName("theme-option");
  for (let i = 0; i < optionElems.length; i++) {
    const elem = optionElems.item(i);
    const themeAttr = elem.attributes.getNamedItem("theme");
    if (themeAttr === null && theme === null) {
      elem.classList.add("selected");
    } else if (themeAttr !== null && themeAttr.value === theme) {
      elem.classList.add("selected");
    } else {
      elem.classList.remove("selected");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTheme(getStoredTheme());
})

window.matchMedia("(prefers-color-scheme: dark)").addEventListener(
  "change",
  function (e) {
    if (localStorage.getItem(themeKey) === null) {
      setTheme(e.matches ? darkTheme : lightTheme);
    }
  }
);
