export async function fetchUser(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await response.json();
  return user;
}


// fetchUser("1").then((user) => {
//   console.log(user);
// });