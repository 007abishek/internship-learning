/**
 * Day 2 – TypeScript + Fetch API
 */

interface User {
    id: number;
    name: string;
    email: string;
  }
  
  const loadBtn = document.getElementById("loadBtn") as HTMLButtonElement;
  const userList = document.getElementById("userList") as HTMLUListElement;
  
  loadBtn.addEventListener("click", async () => {
    userList.innerHTML = "<li>Loading...</li>";
  
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
  
      if (!response.ok) {
        throw new Error("API request failed");
      }
  
      const users: User[] = await response.json();
      userList.innerHTML = "";
  
      users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.email})`;
        userList.appendChild(li);
      });
  
    } catch (error) {
      userList.innerHTML = "<li>Error loading users</li>";
      console.error(error);
    }
  });
  