export async function fetchTodo() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const todo = await response.json();
  return todo;
}

// fetchTodo().then((todo) => {
//   console.log(todo);
// })