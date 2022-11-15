 fetch('https://jsonplaceholder.typicode.com/posts/4', {
  method: 'PUT',
  body: JSON.stringify({
    id: 4,
    title: 'I love coding',
    body: 'Coding in HTML',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));