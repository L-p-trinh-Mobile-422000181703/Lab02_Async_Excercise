function filterPromise(arr: number[]): Promise<number[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const filtered = arr.filter(num => num % 2 === 0);
            if (filtered.length > 0) {
                resolve(filtered);
            } else {
                reject("No even numbers found");
            }
        }, 1000);
    });
}

filterPromise([1, 2, 3, 4, 5]).then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
});