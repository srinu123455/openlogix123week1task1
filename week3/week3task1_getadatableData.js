const thead = document.querySelector("table > thead > tr");
    const tbody = document.querySelector("table > tbody");

    function getFromAPI(url, callback){
  var obj;
  fetch(url)
    .then(res => res.json())
    .then(data => obj = data)
    .then(() => callback(obj))
 }

getFromAPI('https://jsonplaceholder.typicode.com/posts', getData);

function getData(arrOfObjs){

    Object.keys(arrOfObjs[0]).forEach(attr => {
      thead.innerHTML +=
      `<th>${attr}</th>`;
    });
    arrOfObjs.forEach(ele =>{
      let append = "";
      append += "<tr>";
      Object.values(ele).forEach(entry =>{
        append += `<td>${entry}</td>`;
      });
      append += "</tr>";
      tbody.innerHTML += append;
    });

}