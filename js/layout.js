from pathlib import Path

content = r'''/**
 * Human_Capability_Hub
 * File 10 - js/layout.js
 */
window.initLayout=function(){
  const root=document.documentElement;
  const update=()=>{
    root.style.setProperty("--vh",`${window.innerHeight*0.01}px`);
  };
  update();
  window.addEventListener("resize",update,{passive:true});
};
'''
out="/mnt/data/layout.js"
Path(out).write_text(content,encoding="utf-8")
print(out)
