// For var we can re assign a value in the global scope
var hello = 'Hello';
var hello = 'New Hello';

// For let and const we cannot re assign them a value, it will show as an error
let world = 'Hello World';
const helloWorld = 'Hello World!!';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction(); 