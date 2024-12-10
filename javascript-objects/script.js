const animal = {
    id: 42,
    name: "rawr",
    type: "dog",
    "num legs": 4,
    numLegs: 4
};

//console.log(animal);
//
//animal.name = "moo";
//
//console.log(animal);
//
//animal["num legs"] = 5;
//animal.numLegs = 5;
//console.log(animal);

//delete animal.type;
//consol.log(animal);

//console.log("name" in animal);
//// True
//
//console.log("nam2e12e" in animal);
//// False
//
//console.log("rawr" in animal);
//// False

console.log(Object.keys(animal));
console.log(Object.values(animal));
console.log(Object.entries(animal));
