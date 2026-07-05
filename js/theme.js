from pathlib import Path
content="""/**
 * File 13 - js/theme.js
 */
window.initTheme=function(){
  const btn=document.querySelector("[data-theme-toggle]");
  const key="sesamind-theme";
  const apply=t=>{
    document.documentElement.dataset.theme=t;
    try{localStorage.setItem(key,t);}catch(e){}
  };
  const saved=(()=>{
    try{return localStorage.getItem(key);}catch(e){return null;}
  })()||"dark";
  apply(saved);
  if(btn){
    btn.addEventListener("click",()=>{
      apply(document.documentElement.dataset.theme==="dark"?"light":"dark");
    });
  }
};
"""
p="/mnt/data/theme.js"
Path(p).write_text(content,encoding="utf-8")
print(p)
