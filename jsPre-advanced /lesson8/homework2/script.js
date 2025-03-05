var badWordsArr = [];
var form = document.forms["addBadWord"];
var badWords = document.querySelector(".badWords");
var correctSentence = document.forms["correctSentence"];
var refreshBook = function (words) {
    if (words === void 0) { words = []; }
    badWords.textContent = words.join(" ");
};
form["Add"].addEventListener("click", function () {
    if (form["word"] !== "") {
        badWordsArr.push("".concat(form["word"].value));
        refreshBook(badWordsArr);
        form["word"].value = "";
    }
});
form["Reset"].addEventListener("click", function () {
    refreshBook();
    form["word"].value = "";
    badWordsArr.splice(0);
});
var starWord = function (word) {
    var wordArr = word.split("");
    var starArr = wordArr.map(function () { return "*"; });
    var starWord = starArr.join("");
    return starWord;
};
var refreshField = function (sentence) {
    correctSentence["Field"].value = sentence.join(" ");
};
var cleanSentence = function () {
    var sentence = correctSentence["Field"].value.split(" ");
    var cleanSentence = sentence.map(function (value) {
        var isExist = badWordsArr.some(function (badWord) { return badWord === value; });
        if (isExist) {
            return starWord(value);
        }
        return value;
    });
    refreshField(cleanSentence);
};
correctSentence["Cenzor"].addEventListener("click", cleanSentence);
