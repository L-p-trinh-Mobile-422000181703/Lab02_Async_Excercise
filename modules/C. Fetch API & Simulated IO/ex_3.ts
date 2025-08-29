async function filterTodos() {
  const todos: { completed: boolean }[] = await (
    await fetch("https://jsonplaceholder.typicode.com/todos")
  ).json();
  return todos.filter((todo) => todo.completed);
}

filterTodos().then((completedTodos) => {
  console.log(completedTodos);
});
