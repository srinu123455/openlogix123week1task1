var form=$('#form');

        form.on('submit',function(e){
          console.log(343);
            e.preventDefault();
            var body = $('id').value
            var title = $('title').value
            var body = $('body').value
            var body = $('userId').value



        fetch('https://jsonplaceholder.typicode.com/posts/4', {
  method: 'PUT',
  body: JSON.stringify({
    id: 'id',
    title: 'title',
    body: 'body',
    userId: 'userId'
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) =>console.log(response.status));
})
