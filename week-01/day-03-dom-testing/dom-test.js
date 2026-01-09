console.group("DOM Tests");

// Error case test
const fakeDiv = document.createElement("div");
showMessage(fakeDiv, "Required field missing", "error");

console.assert(
  fakeDiv.textContent === "Required field missing",
  "Message text not set correctly"
);

console.assert(
  fakeDiv.style.color === "red",
  "Error message color should be red"
);

// Success case test
const successDiv = document.createElement("div");
showMessage(successDiv, "Success", "success");

console.assert(
  successDiv.textContent === "Success",
  "Success message text incorrect"
);

console.assert(
  successDiv.style.color === "green",
  "Success message color should be green"
);

console.log("All DOM tests passed");
console.groupEnd();
