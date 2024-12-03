function generate() {
    const m = document.getElementById("month").value;
    const v = document.getElementById("vp").value;
    const h = document.getElementById("ht").value;
    let word1 = "";
    let word2 = "";
    let word3 = "";

    if (m == "January") {
        word1 = "Silly";
    } else if (m == "Febuary") {
        word1 = "Funny";
    } else if (m == "March") {
        word1 = "Stupid";
    } else if (m == "April") {
        word1 = "Short";
    } else if (m == "May") {
        word1 = "Tall";
    } else if (m == "June") {
        word1 = "Gross";
    } else if (m == "July") {
        word1 = "Smelly";
    } else if (m == "August") {
        word1 = "Tremendous";
    } else if (m == "September") {
        word1 = "Arugmentative";
    } else if (m == "October") {
        word1 = "Seductive";
    } else if (m == "November") {
        word1 = "Illusive";
    } else if (m == "December") {
        word1 = "Beautiful";
    }

    if (v == "Big Gym") {
        word2 = "Beast";
    } else if (v == "Small Gym") {
        word2 = "Animal";
    } else if (v == "Wallgreens") {
        word2 = "Dominator";
    } else if (v == "Clinic") {
        word2 = "Ruler";
    } else if (v == "Else") {
        word2 = "King";
    }

    if (h == "Tails") {
        word3 = "Mr.";
    } else if (h == "Heads") {
        word3 = "Mrs.";
    }

    message.innerText = word3 + " " + word1 + " " + word2;
}
