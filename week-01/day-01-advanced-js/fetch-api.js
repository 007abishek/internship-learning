/**
 * Fetch API Example
 * Real-world async operation
 */

async function fetchUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
  
      const users = await response.json();
      console.log("Users:", users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  
  fetchUsers();
  