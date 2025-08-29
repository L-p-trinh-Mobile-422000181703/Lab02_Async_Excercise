export async function fetchUsers(id: string[]) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await Promise.all(
    id.map((userId) =>
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => res.json())
    )
  );
  return response;
}


// fetchUsers(["1", "2", "3"]).then((users) => {
//   console.log(users);
// });