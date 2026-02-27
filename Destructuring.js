// Array Destructuring Example

let marks = [85, 90, 78];

let [math, science, english] = marks;

console.log("Math:", math);
console.log("Science:", science);
console.log("English:", english);

// Object Destructuring Example

let Student = {
  Name_: "Ashwini",
  Age: 22,
  course: "BCA"
};

let { Name_, Age, course } = Student;

console.log("Name:", Name_);
console.log("Age:", Age);
console.log("Course:", course);

// Rename & Default Value

let user_ = {
  username: "Aashu"
};

let { username: username, country = "India" } = user_;

console.log("Username:", username);
console.log("Country:", country);