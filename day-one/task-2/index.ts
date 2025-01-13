function longestWord(mainStr: string): string {

    const words = mainStr.split(' ');

    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

const result = longestWord("Поиск самого длинного слова")
console.log(`Самое длинное слово в строке: ${result}`);