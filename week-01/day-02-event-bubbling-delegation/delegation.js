/**
 * Event Delegation Practice
 */

const userList=document.getElementById("userList");
const addUserBtn=document.getElementById("addUser");

userList.addEventListener("click",(event) =>{
    if(event.target.tagName==="LI"){
        console.log("Click user:",event.target.textContent);
    }
});

addUserBtn.addEventListener("click",()=>{
    const li=document.createElement("li");
    li.textContent="New User";
    userList.appendChild(li);
});
/*
OUTPUT:
- Clicking any list item logs its name
- Newly added items also work
- Only ONE event listener is used
*/
