$(document).ready(function(){
    $('#num1').val("");
    $('#num2').val("");
    $('#ans').val("");

    
    
    $('#btn').click(function(){
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());

    if(num1>=0 && num2>=0) {  
     var sum = num1 + num2;
    
     $("#ans").val(sum);
    $('p').html('<h1>'+ sum +'</h1>').css('color','green');
    }
    else{
    $('p').html('<h1>'+'Pls.Enter the Values' +'</h1>').css('color','red');
    }
})
 })