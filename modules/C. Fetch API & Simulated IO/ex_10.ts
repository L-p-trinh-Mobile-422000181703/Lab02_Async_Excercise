import { fetchUser } from "../B. Async-Await/ex_8";

async function processUsers() {
  const userIds = ["1", "2", "3", "4", "5"];
  const results = await Promise.allSettled(userIds.map(id => fetchUser(id)));

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`User ${userIds[index]}:`, result.value);
    } else {
      console.error(`User ${userIds[index]} failed:`, result.reason);
    }
  });
}
