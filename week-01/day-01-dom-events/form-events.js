/**
 * Day 1 – Form Events
 * Handling form submission
 */

const form = document.getElementById("myForm");
const emailInput = document.getElementById("email");
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent page reload
  output.textContent = `Email submitted: ${emailInput.value}`;
});

/*
OUTPUT (On Form Submit):

Email submitted: test@example.com

Explanation:
- preventDefault() stops page refresh
- form input value is read
- output is dynamically updated
*/
