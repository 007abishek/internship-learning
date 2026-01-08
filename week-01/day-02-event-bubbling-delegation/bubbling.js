/**
 * Event Bubbling Practice
 */

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
  });
  
  document.getElementById("child").addEventListener("click", (event) => {
    console.log("Child clicked");
   // event.stopPropagation(); // uncomment to stop bubbling
  });
  
  /*
  OUTPUT (when button clicked):
  Child clicked
  Parent clicked
  
  If stopPropagation() is enabled:
  Child clicked
  */
  