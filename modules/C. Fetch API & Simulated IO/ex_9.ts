import { fetchUser } from "../B. Async-Await/ex_8";

async function queueProcess() {
  const queue = ["1", "2", "3", "4", "5"];
  queue.forEach(async (userId) => {
    const user = await fetchUser(userId);
    console.log(user);
  });
}
