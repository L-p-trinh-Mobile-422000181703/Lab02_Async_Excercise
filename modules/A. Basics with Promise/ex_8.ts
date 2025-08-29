const numberPromise = (num: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 0) {
                resolve(num);
            } else {
                reject(0);
            }
        }, 1000);
    });
};

numberPromise(5).then((result) => {
    result *= 2;
   return result;
}).
then((result2) => {
   result2 += 5;
   return result2;
}).
then((result) => {
   console.log(result);
}).
catch((error) => {
    console.error(error);
});
