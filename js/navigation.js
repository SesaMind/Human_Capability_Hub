from pathlib import Path
content="""/**
 * File 12 - js/navigation.js
 */
window.initNavigation=function(){
  const links=document.querySelectorAll("nav a[href^='#']");
  links.forEach(link=>{
    link.addEventListener("click",e=>{
      const target=document.querySelector(link.getAttribute("href"));
      if(!target) return;
      e.preventDefault();
      target.scrollIntoView({behavior:"smooth",block:"start"});
    });
  });
};
"""
path="/mnt/data/navigation.js"
Path(path).write_text(content,encoding="utf-8")
print(path)
