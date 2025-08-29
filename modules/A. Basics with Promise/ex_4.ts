const myPromise4 = new Promise((resolve, reject) => {
  const number = Math.random();

  if(number > 0.5) {
    resolve(`the number is greater than 10, the value is ${number}`);
  } else {
    reject(`the number is less than or equal to 10, the value is ${number}`);
  }
})

myPromise4.then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
})