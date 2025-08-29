import { simulateTask } from "../../shared/function";

const promiseALL = Promise.all([
  simulateTask(1000, "Task 1 done"),
  simulateTask(2000, "Task 2 done"),
  simulateTask(3000, "Task 3 done"),
]);

promiseALL
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });
