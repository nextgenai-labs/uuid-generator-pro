export const THEME_INIT_SCRIPT = `
try {
  var t = localStorage.getItem("theme");
  if (t === "dark") {
    document.documentElement.classList.add("dark");
  } else if (!t && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
  }
} catch (e) {}
`;
