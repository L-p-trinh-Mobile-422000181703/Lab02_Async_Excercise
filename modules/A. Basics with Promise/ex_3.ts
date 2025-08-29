export const myPromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Something went wrong"));
    }, 1000);
})

myPromise3.then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});