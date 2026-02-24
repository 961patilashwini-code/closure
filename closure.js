// Basic Example of Closure

function outer(){
    let message = "Hello Ashwini";
    return function inner(){
        console.log(message);
    };
}
const greet = outer();
greet();

// 2

function outer1(){
    let x = 10;
    return function(){
        console.log(x);
    };
}
const result = outer1();
result();

// Counter Example

function counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };

}
const increment = counter();
increment();
increment();
increment();

// 2

function counter1(){
    let count = 10;
    return function(){
        count +=2;
        console.log(count);
    };
}
const c = counter1();
c();
c();
c();

// Multiple Closures Example

function createuser(name){
    return function(){
        console.log("Hello " + name);
    };
}
const user1 = createuser("Ashwini");
const user2 = createuser("Rutuja");

user1();
user2();

// 2

function createAdder(x) {
  return function(y) {
    console.log(x + y);
  };
}

const add5 = createAdder(5);
const add10 = createAdder(10);

add5(2);
add10(2);
add5(3);