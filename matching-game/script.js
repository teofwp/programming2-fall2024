document.addEventListener("DOMContentLoaded", () => {
    const pairs = [
        { word: "8/4", match: "2" },
        { word: "1/2", match: "3/6" },
        { word: "16/12", match: "4/3" },
        { word: "90/100", match: "9/10" },
        { word: "12y/20y", match: "3/5" },
        { word: "100/10", match: "10" },
        { word: "7/8", match: "21/24" },
        { word: "10x/4x", match: "5/2" },
        { word: "abc/abc", match: "1" },
        { word: "33/60", match: "11/20" },
        { word: "12/16", match: "3/4" },
        { word: "25/35", match: "5/7" },
        { word: "12/4", match: "3" },
        { word: "3/7", match: "9/21" },
        { word: "15/18", match: "5/6" },
        { word: "24/27", match: "8/9" },
        { word: "4/44", match: "1/11" },
        { word: "5z/25z", match: "1/5" },
        { word: "4/5", match: "40/50" },
        { word: "2/5", match: "22/55" },
        { word: "14/2", match: "7" },
        { word: "w/10w", match: "1/10" },
        { word: "12/42", match: "4/14" },
        { word: "30/1000", match: "3/100" },
        { word: "1/8", match: "2/16" },
        { word: "4k/6k", match: "2/3" },
        { word: "2/9", match: "6/27" },
        { word: "21/22", match: "21000/22000" },
        { word: "48/4", match: "12" },
        { word: "10/6", match: "5/3" }
    ];

    let cards = document.getElementsByClassName("item");
    console.log(cards);

    // Fisher-Yates (or Knuth) Shuffle algorithm
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            // Generate a random index from 0 to i
            const j = Math.floor(Math.random() * (i + 1));
            // Swap elements at indices i and j
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function shuffleAssign() {
        // shuffle list of pairs
        let shuffledPairs = shuffleArray(pairs);
        console.log(shuffledPairs);

        //create new array for selected pairs this round
        let cardPairs = [];

        // add the first cars.length/2 pairs (word and match) to new array
        for (let i = 0; i < cards.length / 2; i++) {
            cardPairs.push(shuffledPairs[i].word);
            cardPairs.push(shuffledPairs[i].match);
        }
        console.log(cardPairs);

        // shuffle that array
        cardPairs = shuffledArray(cardPairs);

        // iterate over that array to assign cards
    }

    shuffleAssign();
});
