// The local scope enables us to access a variables inside a code block or a function, and only in this structures
// So we can only execute or call this variables in this structures

const helloWorld = () => {
    const hello = 'Hello World!';
    console.log(hello);
}

helloWorld(); // Works fine
console.log(hello); // Shows an error

// Other example

var scope = 'I am global'

const functionScope = () => {
    var scope = 'I am just local';
    const fun = () => {
        return scope;
    }
    console.log(fun());
}

functionScope(); // Prints the local
console.log(scope); // Prints the global
