      function myfun(){
      			
      			var a =document.getElementById("id1").value;
      			var b =document.getElementById("id2").value;
      			var c =document.getElementById("id3").value; 
      			var d =document.getElementById("id4").value;
      			var e =document.getElementById("id5").value;
      			var f =document.getElementById("id6").value;
      			var g =document.getElementById("id7").value; 
                var h =document.getElementById("id8").value;   
      			var i =document.getElementById("id9").value; 
      			var j =document.getElementById("id10").value ; 
      		    const array = [a,b,c,d,e,f,g,h,i,j];
      			
        		document.getElementById('demo').innerHTML=array;
        		
         		array.sort(function(a,b){
                    return b-a;
                });
        		document.getElementById('demo1').innerHTML=array;
        	}