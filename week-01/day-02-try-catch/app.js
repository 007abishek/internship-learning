/**
 * try...catch Practice with DOM
 */

const output = document.getElementById("output");
const parseBtn = document.getElementById("parseBtn");
const fetchBtn = document.getElementById("fetchBtn");

// SYNC try...catch
parseBtn.addEventListener("click", () => {
  try {
    const data = '{name:"Abhishek"}'; // invalid JSON
    const user = JSON.parse(data);
    output.textContent = "User: " + user.name;
  } catch (error) {
    output.textContent = "JSON Error: " + error.message;
  }
});

// ASYNC try...catch
fetchBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();
    output.textContent = "Users fetched: " + users.length;
  } catch (error) {
    output.textContent = "Fetch Error: " + error.message;
  }
});

/*
EXPECTED OUTPUT:

Click "Parse JSON":
JSON Error: Unexpected token n in JSON at position 1

Click "Fetch Users":
Users fetched: 10
*/
