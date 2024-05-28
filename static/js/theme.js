// Store the CSS class for the theme in localStorage under this key
const themeKey = "theme";
const lightTheme = "theme-light";
const darkTheme = "theme-dark";
/** CSS variables to store and reset when page loads */
const cssVars = [
  "--light-color",
  "--dark-color",
  "--fg-color",
  "--bg-color",
  "--bg-hoverable",
  "--bg-hover",
  "--bg-selected",
  "--bg-selected-hover",
  "--highlight-color",
  "--link-color",
  "--link-color-visited",
  "--logo-path",
  "--logo-text",
  "--logo-text-bg"
];

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
  const style = getComputedStyle(document.body);
  for (const varName of cssVars) {
    localStorage.setItem(varName, style.getPropertyValue(varName));
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

for (const varName of cssVars) {
  document.documentElement.style.setProperty(varName, localStorage.getItem(varName));
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
