import { getMultipleArr } from "./ex_6";

async function printArr() {
  for(const num of await getMultipleArr()) {
    console.log(num);
  }
}

printArr()