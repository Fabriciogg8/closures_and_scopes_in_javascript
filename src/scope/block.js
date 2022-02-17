// First Example

const fruits = () => {
    if(true){
    var fruit1 = 'apple';
    let fruit2 = 'banana';
    const fruit3 = 'kiwi';
    }
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
};


fruits();

// Second Example

let x=1;
{
    let x=2;
    console.log(x); // Shows 2
}
console.log(x); // Shows 1

var x=1;
{
    var x=2;
    console.log(x); // Shows 2
}
console.log(x); // Shows 2 because we re assign the value inside the block

// Third Example

const anotherFunction = () => {
    for(var i=0; i < 10; i++){
        setTimeout(() => {
            console.log(i); // When we use var we only print the last value, in this case 10
        }, 1000)
    }
};

anotherFunction();

const anotherFunction = () => {
    for(let i=0; i < 10; i++){
        setTimeout(() => {
            console.log(i); // When we use let we can see the ten values from 0 to 9
        }, 1000)
    }
};

anotherFunction();