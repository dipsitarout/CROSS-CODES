
const accommodationSelect = document.getElementById("accommodation-select");
const TAGS=document.getElementById("TAGS");
let div=document.querySelectorAll(".track_content");
function handleSelectChange(event) {
  const currentValue = event.target.value;
  console.log(currentValue);
  for(d of div){
    if(d.classList.contains(currentValue)){
        d.classList.remove("nos");
        d.classList.add("s");
    }
    else{
        d.classList.remove("s");
        d.classList.add("nos");
    }
  }
  if(currentValue==""){
    for(d of div){
        d.classList.remove("nos");
    }
  }
}
accommodationSelect.addEventListener("change", handleSelectChange);
TAGS.addEventListener("change", (event)=>{
    const currentValue = event.target.value;
  console.log(currentValue);
  
  for(d of div){
    if(d.classList.contains(currentValue)){
        d.classList.remove("nos");
        
    }
    else{
        d.classList.add("nos");
    }
  }
  if(currentValue==""){
    for(d of div){
        d.classList.remove("nos");
    }
  }
});

