// objects.js
// Object creation and access

const intern = {
  name: "Abhishek",
  role: "Frontend Intern",
  skills: ["JavaScript", "React"],
  address: {
    city: "Bangalore",
    country: "India"
  }
};

// Accessing values
console.log(intern.name);
console.log(intern.skills[0]);
console.log(intern.address.city);

// Updating values
intern.role = "Software Intern";

// Adding new property
intern.experience = "Fresher";

console.log(intern);
