function identicalLetters(str1: string, str2: string): string {

    const set1 = new Set(str1.toLowerCase());
    const set2 = new Set(str2.toLowerCase());

    const commonLetters: string[] = [];

    for (const char of set1) {
        if (set2.has(char)) {
            commonLetters.push(char);
        }
    }

    return commonLetters.join('');
}

const result = identicalLetters("ПримерСтроки1", "строкиПример2");
console.log(`Общие символы: ${result}`);
