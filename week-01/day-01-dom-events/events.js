/**
 * Day 1 – Events
 * Handling user interactions
 */

const button = document.getElementById("changeTextBtn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  output.textContent = "Button was clicked!";
});

/*
OUTPUT (On Button Click):

Button was clicked!

Explanation:
- click event is captured
- addEventListener executes callback
- DOM updates without page reload
*/
