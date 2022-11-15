const thead = document.querySelector("table > thead > tr");
        const tbody = document.querySelector("table > tbody");

    $(function() {
    $('button').on('click', function() {
        var val1 = document.getElementById('value1').value;
      
        var url = "https://jsonplaceholder.typicode.com/posts/" + val1;

        function getFromAPI(url, callback){
    var obj;
    fetch(url)
        .then(res => res.json())
        .then(data => obj = data)
        .then(() => callback(obj))
    }

        getFromAPI(url, getData);
    });
        function getData(arrOfObjs){
            const ok2 = arrOfObjs;
            
            console.log(ok2.userId);
            console.log(ok2.id);
            console.log(ok2.title);
            console.log(ok2.body);

        // Object.keys(arrOfObjs[0]).forEach(attr => {
        // thead.innerHTML +=
        // `<th>${attr}</th>`;
        // });
        // arrOfObjs.forEach(ele =>{
        // let append = "";
        // append += "<tr>";
        // Object.values(ele).forEach(entry =>{
        //     append += `<td>${entry}</td>`;
        // });
        // append += "</tr>";
        // tbody.innerHTML += append;
        // });

    }
        
});