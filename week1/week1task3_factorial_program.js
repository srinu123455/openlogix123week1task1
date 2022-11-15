   function myFun(){
          
            var fact=1;
            var n=document.getElementById("demo1").value;
            for (var i = 1; i<=n; i++) {
                fact = fact * i;
            }document.getElementById("demo").innerHTML= fact; }