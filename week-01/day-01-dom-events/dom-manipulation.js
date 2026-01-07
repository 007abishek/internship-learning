/**
 * Day 1 – DOM Manipulation
 * Changing text, style, and classes
 */

const heading = document.getElementById("title");

heading.textContent = "DOM Day 1 – Updated Title";
heading.style.color = "blue";

/*
OUTPUT (On Web Page):

Heading text changes to:
"DOM Day 1 – Updated Title"

Heading color changes to blue

Explanation:
- textContent updates DOM text
- style property updates inline CSS
*/
