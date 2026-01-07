/**
 * DOM + Fetch Mini Project
 * Fetch users and display them dynamically
 */

const loadBtn = document.getElementById("loadBtn");
const statusText = document.getElementById("status");
const userList = document.getElementById("userList");

async function fetchUsers() {
  statusText.textContent = "Loading users...";
  userList.innerHTML = "";

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();

    statusText.textContent = "Users loaded successfully";

    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = `${user.name} (${user.email})`;
      userList.appendChild(li);
    });

  } catch (error) {
    statusText.textContent = "Error loading users";
    console.error(error);
  }
}

loadBtn.addEventListener("click", fetchUsers);
