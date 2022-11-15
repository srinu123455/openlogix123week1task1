$(document).on('click','#submitBtn', function() {
    $("#signupForm").valid();
   /* console.log("User-Name:" +$('#name').val());*/
   var a=$("#name").val();
    var b=$("#age").val();
    var c=$('input[name="radio"]:checked').val();
    var d=$('input[name="radio"]:checked').val();
    var e=$("#address").val();
     var f=$('input[name="school"]:checked').val();
     var g=$('input[name="inter"]:checked').val();
     var h=$('input[name="degree"]:checked').val();
     var i=$('input[name="pg"]:checked').val();
     var j =$("#sel").val();
    console.log("User-Name:" +a);
    console.log("Age:"+b);
    console.log("Gender:"+c);
    console.log("Gender:"+d);
    console.log("Address:"+e);
    console.log("Education:"+f);
    console.log("Education:"+g);
    console.log("Education:"+h);
    console.log("Education:"+i);
    console.log("City:"+j);
});
 $().ready(function () {
             

            $("#signupForm").validate({
                // in 'rules' user have to specify all the constraints for respective fields
                rules: {
                   
                    name: {
                        required: true,
                        minlength: 2 //for length of lastname
                    },
                    age: {
                        required: true,
                         maxlength: 2
                    },
                    a2:"required",
                    address:{
                        required: true,

                    },
                    
                   
              
                // in 'messages' user have to specify message as per rules
                messages: {
                    a2: " Please enter your firstname",
                    
                    name: {
                        required: " Please enter a username",
                        minlength: " Your username must consist of at least 2 characters"
                    },
                     age: {
                        required: " Please enter age",
                        maxlength: " Your username must consist only 2 numbers"

                    },
                     address: {
                        required: " Please enter a username",
                       
                    },

                },
    errorPlacement: function(error, element) 
        {
        if(element.parent('.input-group').length) {
               error.insertAfter(element.parent());
            } 
           else if ( element.is(":radio") ) 
           {
               error.appendTo( element.parents('.radio') );
           }
           else 
           { 
               error.insertAfter( element );
           }
        }
            } 
                  
                
            });
        });

function myfun(){
        
    var a=$("#name").value;
    var b=$("#age").value;
    var c=$('input[name="radio"]:checked').value;
    var d=$('input[name="radio"]:checked').value;
    var e=$("address").value;
     var f=$('input[name="school"]:checked').value;
     var g=$('input[name="inter"]:checked').value;
     var h=$('input[name="degree"]:checked').value;
     var i=$('input[name="pg"]:checked').value;
     var j =$("sel").value;
    console.log("User-Name:" +a);
    console.log("Age:"+b);
    console.log("Gender:"+c);
    console.log("Gender:"+d);
    console.log("Address:"+e);
    console.log("Education:"+f);
    console.log("Education:"+g);
    console.log("Education:"+h);
    console.log("Education:"+i);
    console.log("City:"+j);
}

