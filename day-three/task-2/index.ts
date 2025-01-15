async function fetchJokeData(url: string): Promise<Object | unknown> {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            return data;
        }
        throw Error(`Ошибка при загрузке данных: ${response.status}${response.statusText}`);

    } catch (error) {
        console.error(`Ошибка при выполнении запроса: ${error}`);
        return error;
    }
}

fetchJokeData("https://official-joke-api.appspot.com/random_joke")
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
