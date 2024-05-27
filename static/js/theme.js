// Store the CSS class for the theme in localStorage under this name
const themeKey = "theme";
const lightTheme = "theme-light";
const darkTheme = "theme-dark";

// Maps CSS class names for themes to their names and icons
const themes = {
  [lightTheme]: {
    name: "Light"
  },
  [darkTheme]: {
    name: "Dark"
  },
  "theme-ugly": {
    name: "Experimental"
  }
};

function getTheme() {
  const stored = localStorage.getItem(themeKey);
  if (stored !== null) {
    return stored;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return darkTheme;
  } else {
    return lightTheme;
  }
}

function setTheme(theme) {
  localStorage.setItem(themeKey, theme);
  document.body.className = theme;
}

setTheme(getTheme())

window.matchMedia("(prefers-color-scheme: dark)").addEventListener(
  "change",
  function (e) {
    if (localStorage.getItem(themeKey) === null) {
      setTheme(e.matches ? darkTheme : lightTheme);
    }
  }
);
