function runLengthEncoding(mainStr: string): string {
    let encodedStr = "";
    let count = 1;

    for (let i = 1; i <= mainStr.length; i++) {
        if (i < mainStr.length && mainStr[i] === mainStr[i - 1]) {
            count++;
        } else {
            encodedStr += mainStr[i - 1] + count;
            count = 1;
        }
    }

    return encodedStr;
}

function runLengthDecoding(encodedStr: string): string {
    let decodedStr = "";
    let i = 0;

    while (i < encodedStr.length) {
        let char = encodedStr[i];
        let count = 0;
        i++;

        while (i < encodedStr.length && !isNaN(Number(encodedStr[i]))) {
            count = count * 10 + Number(encodedStr[i]);
            i++;
        }

        decodedStr += char.repeat(count);
    }

    return decodedStr;
}

const originalStr = "WWWjjjjjIIzzzz";
console.log("Изначальная строка строка:", originalStr);

const encoded = runLengthEncoding(originalStr);
console.log("Закодированная строка:", encoded);

console.log("Декодированная строка:", runLengthDecoding(encoded));