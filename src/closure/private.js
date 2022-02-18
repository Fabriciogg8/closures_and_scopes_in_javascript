const person = () => {
    var saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};


newPerson = person();
console.log(newPerson.getName()); // Prints Name, because is the value stored into saveName

newPerson.setName('Fabricio'); // Prints Fabricio, because we change the value stored into saveName
console.log(newPerson.getName()); 

