const builtCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++); // This two aren't the same. The first one, like we see in the clase, first print the count variable and then add 1
     // console.log(++count);    This one, add 1 to the number that we pass, and the print the result 
    };
    return displayCount;
}

const myCount = builtCount(1);
           // First form -  Second form
myCount(); // Print 1       Print 2
myCount(); // Print 2       Print 3
myCount(); // Print 3       Print 4 

// We can create a new scope by saving the function to another variable.

const myNewCount = builtCount(8);

myNewCount(); // Print 8 --> It starts from the new value we passed to it
myNewCount(); // Print 9 