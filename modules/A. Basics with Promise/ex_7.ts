import { simulateTask5 } from "./ex_5";
import { simulateTask } from "../../shared/function";

const promiseRace = Promise.race([
  simulateTask(1000, "Task 1 done"),
  simulateTask(2000, "Task 2 done"),
  simulateTask(3000, "Task 3 done"),
]);

promiseRace
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
