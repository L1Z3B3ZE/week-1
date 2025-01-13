function indexOf(str: string, substr: string): number {
    const n = str.length;
    const m = substr.length;

    for (let i = 0; i <= n - m; i++) {
        let isMatch = true;

        for (let j = 0; j < m; j++) {
            if (str[i + j] !== substr[j]) {
                isMatch = false;
                break;
            }
        }

        if (isMatch) {
            return i; // Возврат индекса первого символа вхождения
        }
    }

    return -1;
}

console.log(indexOf("Строкапоиска", "поиск"));