$(document).ready(function(){
    $(".data-table").hide();

        $(".add-row").click(function(){
           
          
            $(".data-table").show();
            
            var number = $("#number").val();
            var name = $("#name").val();
            var age = $("#age").val();
            var phone = $("#phone").val();
            var address = $("#address").val();
            var action = $("#action").val();
            console.log(address);
            var markup = "<tr><td class='numberval'>" +number+ "</td><td class='nameval'>" + name + "</td><td class='ageval'>" + age + "</td><td class='phoneval'>" + phone + "</td><td class='addressval'>" + address + "</td><td><button class='btnDelete' style='background:lightblue;'><i class='fa fa-trash'></i></button> <button class='btnEdit' style='background:lightblue;'><i class='fa fa-pencil'></button></td></tr>";
            $("table tbody").append(markup);
           
        });

 });

    


$(document).on('click', '.btnDelete', function () {
    $(this).closest('tr').remove();
    alert("are you ok for delete the row");


});
        /*$("form").submit(function(e){
            e.preventDeafult();
            $(".add-row").click();

            var number = $("input[name='number']").val();
            var name = $("input[name='name']").val();
            var age = $("input[name='age']").val();
            var phone = $("input[name='phone']").val();
            var address = $("input[name='address']").val();
            
            $(".data-table tbody").append("<tr data-number='" +number+"' data-name='" +name+"' data-age='" +age+"' data-phone='" +phone+"' data-address='" +address+"'><td>" +number+ "</td><td>" + name + "</td><td>" + age + "</td><td>" + phone + "</td><td>" + address + "</td><td><button class='btnDelete' style='background:lightblue;'><i class='fa fa-trash'></i></button> <button class='btnupdate' style='background:lightblue;'><i class='fa fa-pencil'></button><button type='button' class='btnEdit'></button></td></tr>");
            $("input[name='']").val("");
        });*/

 

$(document).on('click', '.btnEdit', function() {

var number = $("input[name='number']").val();
var name=  $("input[name='name']").val();
var age= $("input[name='age']").val();
var phone=$("input[name='phone']").val();
var address=$("input[name='address']").val();
$(this).closest('tr').find('td:eq(0)').html("<input name='number' value='"+number+"'>");
$(this).closest('tr').find('td:eq(1)').html("<input name='name' value='"+name+"'>");
$(this).closest('tr').find('td:eq(2)').html("<input name='age' value='"+age+"'>");
$(this).closest('tr').find('td:eq(3)').html("<input name='phone' value='"+phone+"'>");
$(this).closest('tr').find('td:eq(4)').html("<input name='address' value='"+address+"'>");
$(this).closest('tr').find('td:eq(5)').append("<button type='button' class='btnupdate'>update</button>");
$(this).hide()


});


$(document).on('click', '.btnupdate', function() {

var number=$(this).parents('tr').find("input[name='number']").val();
var name=$(this).parents('tr').find("input[name='name']").val();
var age=$(this).parents('tr').find("input[name='age']").val();
var phone=$(this).parents('tr').find("input[name='phone']").val();
var address=$(this).parents('tr').find("input[name='address']").val();
$(this).parents('tr').find('td:eq(0)').text(number);
$(this).parents('tr').find('td:eq(1)').text(name);
$(this).parents('tr').find('td:eq(2)').text(age);
$(this).parents('tr').find('td:eq(3)').text(phone);
$(this).parents('tr').find('td:eq(4)').text(address);
console.log(this);
$(this).parents('tr').attr('number',number);
$(this).parents('tr').attr('name',name);
$(this).parents('tr').attr('age',age);
$(this).parents('tr').attr('phone',phone);
$(this).parents('tr').attr('address',address);

$(this).parents('tr').find('.btnDelete').show();
$(this).parents('tr').find('.btnEdit').show();

$(this).parents('tr').find('.btnupdate').hide();
$(this).parents('tr').find('.btnDelete').show();


});