/**
 * TypeScript + DOM Practice
 */

// DOM element selections with proper types
const nameInput = document.getElementById("nameInput") as HTMLInputElement;
const greetBtn = document.getElementById("greetBtn") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLParagraphElement;

// Event handling with type safety
greetBtn.addEventListener("click", () => {
  const name: string = nameInput.value;

  if (name.trim() === "") {
    output.textContent = "Please enter your name";
    return;
  }

  output.textContent = `Hello, ${name}! Welcome to TypeScript DOM.`;
});

/*
EXPECTED OUTPUT:
- If input is empty → "Please enter your name"
- If name is entered → "Hello, <name>! Welcome to TypeScript DOM."
*/
