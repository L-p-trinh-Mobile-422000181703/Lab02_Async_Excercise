
const myPromise2 = new Promise((resolve) => {
  return resolve(10);
})

myPromise2.then((result) => {
  console.log(result);
})