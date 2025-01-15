function delayedPromise(delay: number, message: string) {
    return new Promise(resolve => {
        setTimeout(() => resolve(message), delay)
    })
        .then((result) => {
            console.log(result);
        });

}

delayedPromise(5000, "Отложенное сообщение")



