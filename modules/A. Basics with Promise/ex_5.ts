export function simulateTask5(time: number = 1000): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task done");
    }, time);
  });
}

simulateTask5()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
