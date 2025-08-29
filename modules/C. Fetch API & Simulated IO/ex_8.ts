import { fetchUser } from "../B. Async-Await/ex_8";

async function batchProcess() {
  const result: any[] = await Promise.all(
    ["1", "2", "3", "4", "5"].map(async (num) =>
    {
      return await fetchUser(num);
    }
    )
  );
  console.log(result);
}

batchProcess();