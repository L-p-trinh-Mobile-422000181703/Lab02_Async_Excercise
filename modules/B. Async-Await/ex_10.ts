import { fetchUser } from "./ex_8";
import { fetchUsers } from "./ex_9";

const expectTime = async () => {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request timed out")), 2000)
  );

  try {
    const user = await Promise.race([fetchUsers(["1", "2" , "3" , "4", "5"]), timeout]);
    console.log(user);
  } catch (error) {
    console.error(error);
  }
};

expectTime().then(() => console.log("Done"));