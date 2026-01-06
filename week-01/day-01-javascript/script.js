let count=5;

const countDisplay=document.querySelector('#count');
const butt=document.querySelector('#incBtn');

butt.addEventListener('click',()=>{
    count++;
    countDisplay.textContent=count;
    });