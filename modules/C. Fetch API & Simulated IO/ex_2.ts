import { fetchTodo } from "./ex_1";

async function callMutiples(tries: number) {
  setInterval(() => {
    if (tries > 0) {
      fetchTodo().then((todo) => {
        console.log(todo);
      });
      tries--;
    }
    return tries == 0;
  }, 1000);
}

callMutiples(5).then(() => {
  console.log("All done");
});
