from pathlib import Path

content = r'''/**
 * Human_Capability_Hub
 * File 09 - js/app.js
 */

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("app-ready");

  // Initialize optional modules if they exist.
  [
    "initLayout",
    "initSidebar",
    "initNavigation",
    "initTheme",
  ].forEach((fn) => {
    if (typeof window[fn] === "function") {
      try {
        window[fn]();
      } catch (err) {
        console.error(`${fn} failed:`, err);
      }
    }
  });
});
'''
out="/mnt/data/app.js"
Path(out).write_text(content,encoding="utf-8")
print(out)
