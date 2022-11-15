var form=$('#form');

        form.on('submit',function(e){
            e.preventDefault();
            var title = $('#title').val();
            var body = $('#body').val();
            console.log(title);

            fetch("https://jsonplaceholder.typicode.com/posts",{
              method:'POST',
              body:JSON.stringify({
                title:title,
                body:body
              }),
              headers:{
                "content-Type":"application/json; charset=UTF-8"
              }
            })
              .then(function(response){
                return response.json()
              })
              .then(function(data){
            console.log(data)
           
        })

    })