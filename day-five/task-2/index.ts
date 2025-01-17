function minBanknotesAmount(sum: number) {
    if (sum <= 0) {
        throw new Error("Сумма должна быть положительным целым числом.");
    }

    const denominations = [100, 50, 10, 5, 2, 1];

    const result: Record<number, number> = {};  //объект для хранения результата

    denominations.forEach(denomination => {
        result[denomination] = 0;
    });

    // Используем reduce для прохода по всем номиналам
    denominations.reduce((remainingSum, denomination) => {
        const count = Math.floor(remainingSum / denomination); //вычисляем, сколько купюр каждого номинала в оставшейся сумме
        if (count > 0) {
            result[denomination] = count; //если хотя бы одна купюра номинала подходит, обновляем их количество
        }
        return remainingSum % denomination; // Возвращаем остаток суммы для дальнейшего разбиения
    }, sum);

    console.log(`Разбиение суммы ${sum} на минимальное количество купюр:`);
    denominations.forEach((denomination) => {
        console.log(`${denomination}: ${result[denomination]}`);
    });

}

minBanknotesAmount(564);



