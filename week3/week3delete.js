
   
        /*fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
.then((response) => console.log(response.status))
.then((json) => console.log(json));*/


$.getJSON("file:///D:/tasks-2/week3/data.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});