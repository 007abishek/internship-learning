/**
 * show validation message
 */
function showMessage(element,message,type){
    element.textContent=message;
    element.style.color=type==="error"?"red":"green";
}

//dom wiring
const output=document.getElementById("output");
const submitBtn=document.getElementById("submit");

submitBtn.addEventListener("click",()=>{
    showMessage(output,"form submitted successfully","success");

});

window.showMessage=showMessage;
