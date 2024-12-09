//let fastFood = ["hamburger", "fries", "milkshake", "chicken nuggets"];
//
//for (let i = 0; i < fastFood.length; i++) {
//    console.log(fastFood[i]);
//}
//
//let numbers = [45, 23, 78];
//let doubled = [];
//
//for (let i = 0; i < numbers.length; i++) {
//    doubled.push(numbers[i] * 2);
//}
//
//console.log(doubled);
//
//for (let i = 0; i < 100; i++) {
//    console.log("teo");
//}

let animals = ["lion", "tiger", "elephant", "giraffe", "zebra"];

console.log("Animals in the array:");
for (let animal of animals) {
    console.log(animal);
}

let uppercaseAnimals = [];
for (let animal of animals) {
    uppercaseAnimals.push(animal.toUpperCase());
}

console.log("Uppercase Animals Array:");
console.log(uppercaseAnimals);

animals.pop();
animals.pop();
console.log(animals);

let testScores = [45, 87, 34, 76, 50, 93, 41, 66, 80, 99];

let bonusScores = [];
for (let i = 0; i < testScores.length; i++) {
    bonusScores.push(testScores[i] + 5);
}

console.log(bonusScores);

for (let i = 0; i < testScores.length; i++) {
    if (testScores[i] < 50) {
        testScores.splice(i, 1, "Retake");
    }
}

console.log(testScores);
