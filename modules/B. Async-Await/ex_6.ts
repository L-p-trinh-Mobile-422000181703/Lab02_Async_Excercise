import { multiplyByThree } from "./ex_4";

export async function getMultipleArr(): Promise<number[]> {
  const [num1, num2, num3] = await Promise.all([
    multiplyByThree(1),
    multiplyByThree(2),
    multiplyByThree(3),
  ]);
  return [num1, num2, num3];
}

// getMultipleArr().then((result) => {
//   console.log(result);
// });
