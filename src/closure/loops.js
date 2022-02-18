const anotherFunction = () => {
    for(var i=0; i < 10; i++){
        setTimeout(() => {
            console.log(i); // When we use var we only print the last value, in this case 10
        }, 1000)           // When we use let, we break that cycle, so we won't save the last value, and we will be able to iterate
    }
};

anotherFunction();