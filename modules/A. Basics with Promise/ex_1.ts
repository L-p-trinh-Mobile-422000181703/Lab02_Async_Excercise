const myPromise1 = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});

myPromise1.then((message) => {
    console.log(message);
});