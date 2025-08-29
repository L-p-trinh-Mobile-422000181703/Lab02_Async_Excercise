import { simulateTask } from "../../shared/function";

async function ex2(): Promise<void> {
  const result = await simulateTask(1000, "Hello");

  console.log(result);
}

ex2();
