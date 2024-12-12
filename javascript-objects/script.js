//const animal = {
//    id: 42,
//    name: "rawr",
//    type: "dog",
//    "num legs": 4,
//    numLegs: 4
//};
//
////console.log(animal);
////
////animal.name = "moo";
////
////console.log(animal);
////
////animal["num legs"] = 5;
////animal.numLegs = 5;
////console.log(animal);
//
////delete animal.type;
////consol.log(animal);
//
////console.log("name" in animal);
////// True
////
////console.log("nam2e12e" in animal);
////// False
////
////console.log("rawr" in animal);
////// False
//
//console.log(Object.keys(animal));
//console.log(Object.values(animal));
//console.log(Object.entries(animal));

let person = {
    name: "beast",
    age: 56,
    favoriteColor: "green",
    height: "6'8",
    satScore: 400,
    job: "Basketball player",
    biggestFear: "inflated basketballs",
    favoriteNumber: 3
};

let person2 = {
    name: "skindog",
    age: 24,
    favoriteColor: "blue",
    height: "4'11",
    satScore: 1600,
    job: "database manager",
    biggestFear: "tall people",
    favoriteNumber: 10
};

console.log(
    "There once was a man named " +
        person.name +
        ". He was " +
        person.age +
        ", and loved the color " +
        person.favoriteColor +
        ". What is coolest about him though, is his height. " +
        person.name +
        " is " +
        person.height +
        "."
);
console.log(
    "One day, " +
        person.name +
        " met a guy named " +
        person2.name +
        ". " +
        person2.name +
        " was a " +
        person2.age +
        " year old man whos biggest fear was " +
        person2.biggestFear +
        ". Initially, " +
        person2.name +
        " ran away, but he couldn't get far."
);
console.log(
    "Once " +
        person.name +
        " caught up to " +
        person2.name +
        ", he beat the crap out of him. This proved his long time fear of " +
        person2.biggestFear +
        " to be a rational fear."
);
