const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}

fruits(); // Prints apple


const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    let y = 2; // When we re declared the same variable with let, comes up the error. Even if we don't use this variable
    console.log(x);
    console.log(y);
}

anotherFunction(); // Error, see comment made before


