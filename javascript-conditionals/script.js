//let score = 87;
//
//if (score >= 90) {
//    alert("A");
//} else if (score >= 80) {
//   alert("B");
//} else {
//    alert("STUDY");
//}
//
//let temp = 28;
//let condition = "sunny";
//
//if (temp >= 70 && condition == "sunny") {
//    alert("wear shirt");
//} else if (temp > 40 && (condition == "rainy" || condition == "stormy")) {
//    alert("wear raincoat");
//} else if (temp <= 40 || condition == "snowy") {
//    alert("wear winter coat");
//} else if (temp > 30 && temp < 50) {
//    alert("wear light coat");
//} else if (temp >= 50 && temp < 70) {
//    alert("wear hoodie");
//}

function generate() {
    const U = document.getElementById("Uinput").value;
    const P = document.getElementById("Pinput").value;

    if (U == "teo" && P == "password") {
        message.innerText = "logged in";
        message.style.color = "green";
    } else if (U != "teo" && P != "password") {
        message.innerText = "username and password incorrect";
        message.style.color = "red";
    } else if (U != "teo") {
        message.innerText = "username incorrect";
        message.style.color = "red";
    } else if (P != "password") {
        message.innerText = "password incorrect";
        message.style.color = "red";
    }
}
