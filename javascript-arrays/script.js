//let tasks = ["wrap presents", "do dishes", "clean house"];
//alert(tasks[0]);
//
//tasks[0] = "make dinner";
//alert(tasks);
//
//tasks.push("take a shower");
//alert(tasks);
//
//tasks.pop();
//alert(tasks);
//
//tasks.splice(1, 1, "yuhhh");
//alert(tasks);

let dailyitems = ["car", "stove", "bed"];

dailyitems.push("computer");
console.log(dailyitems);
dailyitems.push("keyboard");
console.log(dailyitems);

dailyitems.pop();
console.log(dailyitems);

dailyitems.splice(1, 0, "luffa");
console.log(dailyitems);
dailyitems.splice(2, 1);
console.log(dailyitems);

let threenumbers = [1, 2, 3];

threenumbers.splice(0, 0, 0);
console.log(threenumbers);
threenumbers.splice(1, 1, 20);
console.log(threenumbers);
