let count=0;

const countDisplay=document.querySelector('#count');
const button=document.querySelector('#incBtn');

button.addEventListener('click',()=>{
    count++;
    countDisplay.textContent=count;
    });