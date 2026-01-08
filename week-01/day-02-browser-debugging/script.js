// Day 2: Browser Debugging Practice

function fetchData() {
    debugger; // Pause 1: function starts
  
    console.log("Fetching data...");
  
    setTimeout(() => {
      debugger; // Pause 2: async callback
      console.log("Data received");
    }, 2000);
  }
  
  const button = document.getElementById("startBtn");
  
  button.addEventListener("click", () => {
    debugger; // Pause 3: button click
    fetchData();
  });
  