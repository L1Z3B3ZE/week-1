type Choice = "Камень" | "Ножницы" | "Бумага";

function rockPaperScissors(playerChoice: Choice): {user: Choice; computer: Choice; result: string} {
    const choices: Choice[] = ["Камень", "Ножницы", "Бумага"];

    if (!choices.includes(playerChoice)) {
        throw new Error("Некорректный ввод. Допустимые значения: 'Камень', 'Ножницы', 'Бумага' ");
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (playerChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (playerChoice === "Камень" && computerChoice === "Ножницы") ||
        (playerChoice === "Ножницы" && computerChoice === "Бумага") ||
        (playerChoice === "Бумага" && computerChoice === "Камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Компьютер победил!";
    }

    return {
        user: playerChoice,
        computer: computerChoice,
        result: result
    };
}

const userChoice: Choice = "Камень";
console.log(rockPaperScissors(userChoice))
