export const createUser = async (user) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  const data = await res.json();

  return data;
};