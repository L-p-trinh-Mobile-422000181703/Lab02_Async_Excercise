import { simulateTask } from "../../shared/function";
import { simulateTask5 } from "../A. Basics with Promise/ex_5";

async function ex1() {
  const myPromise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello Async");
    }, 2000);
  });
  const message = await myPromise;
  console.log(message);
}

async function ex2() {
  const myPromise2 = new Promise<number>((resolve) => {
    resolve(10);
  });
  const result = await myPromise2;
  console.log(result);
}

async function ex3() {
  const myPromise3 = new Promise((_, reject) => {
    setTimeout(() => {
      reject("Something went wrong");
    }, 1000);
  });
  try {
    const result = await myPromise3;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function ex4() {
  const myPromise4 = new Promise((resolve, reject) => {
    const number = Math.random();
    if (number > 0.5) {
      resolve(`the number is greater than 10, the value is ${number}`);
    } else {
      reject(`the number is less than or equal to 10, the value is ${number}`);
    }
  });
  try {
    const result = await myPromise4;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function ex5() {
  try {
    const result = await simulateTask5();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function ex6() {
  try {
    const results = await Promise.all([
      simulateTask(1000, "Task 1 done"),
      simulateTask(2000, "Task 2 done"),
      simulateTask(3000, "Task 3 done"),
    ]);
    console.log(results);
  } catch (error) {
    console.error(error);
  }
}

async function ex7() {
  try {
    const result = await Promise.race([
      simulateTask(1000, "Task 1 done"),
      simulateTask(2000, "Task 2 done"),
      simulateTask(3000, "Task 3 done"),
    ]);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function ex8() {
  const numberPromise = async (num: number): Promise<number> => {
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
  try {
    let result = await numberPromise(5);
    result *= 2;
    result += 5;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function ex9() {
  function filterPromise(arr: number[]): Promise<number[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filtered = arr.filter((num) => num % 2 === 0);
        if (filtered.length > 0) {
          resolve(filtered);
        } else {
          reject("No even numbers found");
        }
      }, 1000);
    });
  }
  try {
    const result = await filterPromise([1, 2, 3, 4, 5]);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function ex10() {
  try {
    const result = await simulateTask(1000, "Hello");
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Done");
  }
}

(async () => {
  await ex1();
  await ex2();
  await ex3();
  await ex4();
  await ex5();
  await ex6();
  await ex7();
  await ex8();
  await ex9();
  await ex10();
})();
