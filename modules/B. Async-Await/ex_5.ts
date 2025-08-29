import { multiplyByThree } from "./ex_4";

async function ex5(): Promise<void> {
  const result1 = await multiplyByThree(5);
  console.log(result1);

  const result2 = await multiplyByThree(10);
  console.log(result2);
}

ex5();
