/**
 * Day 1 – DOM Selectors
 * Selecting HTML elements
 */

const heading = document.getElementById("title");
const button = document.querySelector("#changeTextBtn");
const input = document.querySelector("#nameInput");

console.log(heading, button, input);

/*
OUTPUT (Browser Console):

<h1 id="title">DOM Manipulation Practice</h1>
<button id="changeTextBtn">Change Text</button>
<input id="nameInput" />

Explanation:
- Elements are successfully selected from the DOM
- querySelector and getElementById are working
*/
