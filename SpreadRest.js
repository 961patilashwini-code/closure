// Spread Operator – Syntax & Use Case

let arr1 = [1, 2, 3];
let arr2 = [4, 5];

let combined = [...arr1, ...arr2];

console.log(combined);

// 2

let person = {
  name: "Ashwini",
  age: 22
};

let updatedPerson = { ...person, city: "Mumbai" };

console.log(updatedPerson);


// Rest Operator – Syntax & Use Case

function addNumbers(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

console.log(addNumbers(10, 20, 30));

// 2

let colors = ["Red", "Green", "Blue", "Yellow"];

let [firstColor, ...remainingColors] = colors;

console.log("First:", firstColor);
console.log("Remaining:", remainingColors);