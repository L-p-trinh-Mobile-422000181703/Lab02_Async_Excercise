import { myPromise3 } from "../A. Basics with Promise/ex_3";

async function ex3(): Promise<void> {
  try {
    const result = await myPromise3;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

ex3();