from pathlib import Path
content="""/**
 * File 11 - js/sidebar.js
 */
window.initSidebar=function(){
  const toggle=document.querySelector("[data-sidebar-toggle]");
  const sidebar=document.querySelector("[data-sidebar]");
  if(!toggle||!sidebar) return;
  toggle.addEventListener("click",()=>{
    sidebar.classList.toggle("is-open");
  });
};
"""
out="/mnt/data/sidebar.js"
Path(out).write_text(content,encoding="utf-8")
print(out)
