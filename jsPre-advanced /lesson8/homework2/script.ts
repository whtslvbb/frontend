const badWordsArr: Array<string> = [];

const form = document.forms["addBadWord"] as HTMLFormElement;

const badWords = document.querySelector(".badWords") as HTMLDivElement;

const correctSentence = document.forms["correctSentence"] as HTMLFormElement;

const refreshBook = (words: string[] = []): void => {
  badWords.textContent = words.join(" ");
};

form["Add"].addEventListener("click", () => {
  if (form["word"] !== "") {
    badWordsArr.push(`${form["word"].value}`);
    refreshBook(badWordsArr);
    form["word"].value = "";
  }
});

form["Reset"].addEventListener("click", () => {
  refreshBook();
  form["word"].value = "";
  badWordsArr.splice(0);
});

const starWord = (word: string): string => {
  const wordArr: string[] = word.split("");
  const starArr: string[] = wordArr.map(() => "*");
  const starWord: string = starArr.join("");

  return starWord;
};

const refreshField = (sentence: string[]) => {
  correctSentence["Field"].value = sentence.join(" ");
};

const cleanSentence = () => {
  const sentence: Array<string> = correctSentence["Field"].value.split(" ");

  const cleanSentence: Array<string> = sentence.map((value) => {
    const isExist: boolean = badWordsArr.some((badWord) => badWord === value);

    if (isExist) {
      return starWord(value);
    }
    return value;
  });

  refreshField(cleanSentence);
};

correctSentence["Cenzor"].addEventListener("click", cleanSentence);
