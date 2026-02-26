//  1

const student = {
  name: "Ashwini",
  
  // Traditional Function
  greetTraditional: function() {
    console.log("Traditional:", this.name);
  },

  // Arrow Function
  greetArrow: () => {
    console.log("Arrow:", this.name);
  }
};

student.greetTraditional();
student.greetArrow();

// Traditional function has its own 'this'.
// Arrow function does not have its own 'this'.


//  2
// Traditional
function User(name) {
  this.name = name;
}

const u1 = new User("Ashwini");
console.log(u1.name); 

// Traditional function has its own this.

// Arrow
const user = (name) => {
  this.name = name;
};

// Arrow function does not have its own this.