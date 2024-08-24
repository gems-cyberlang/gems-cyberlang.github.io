// Store the CSS class for the theme in localStorage under this key
const themeKey = "theme";
const lightTheme = "theme-light";
const darkTheme = "theme-dark";

/** CSS variables to store and reset when page loads
 *
 * By loading them before the body loads, we avoid the background flashing white
 * before turning black (if dark mode is enabled)
 */
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
  "--logo-text-bg",
];

export const themes = [
  {
    name: "Sync with system",
    theme: null,
    faClass: "fa-solid fa-circle-half-stroke",
    iconClass: "system-theme-icon",
  },
  {
    name: "Light",
    theme: "theme-light",
    faClass: "fa-solid fa-circle",
    iconClass: "light-theme-icon",
  },
  {
    name: "Dark",
    theme: "theme-dark",
    faClass: "fa-solid fa-circle",
    iconClass: "dark-theme-icon",
  },
  {
    name: "Ugly",
    theme: "theme-ugly",
    faClass: "fa-solid fa-circle",
    iconClass: "ugly-theme-icon",
  },
];

export function getStoredTheme() {
  return localStorage.getItem(themeKey);
}

function getSystemTheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return darkTheme;
  } else {
    return lightTheme;
  }
}

export function setTheme(theme: string | null) {
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

  // This should go in the theme dropdown component, not here
  for (const elem of document.getElementsByClassName("theme-option")) {
    const themeAttr = elem.getAttribute("x-theme");
    if (themeAttr === null && theme === null) {
      elem.classList.add("selected");
    } else if (themeAttr !== null && themeAttr === theme) {
      elem.classList.add("selected");
    } else {
      elem.classList.remove("selected");
    }
  }
}

export function loadTheme() {
  for (const varName of cssVars) {
    document.documentElement.style.setProperty(
      varName,
      localStorage.getItem(varName),
    );
  }

  document.addEventListener("DOMContentLoaded", function () {
    setTheme(getStoredTheme());
  });

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", function (e) {
      if (localStorage.getItem(themeKey) === null) {
        setTheme(e.matches ? darkTheme : lightTheme);
      }
    });
}
