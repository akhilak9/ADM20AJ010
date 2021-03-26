$(document).ready(function(){
  
    $('span').hover(
    function(){
       var txt =  $(this).text();
    $(this).css('background-color','bisque');
    if(txt.includes("th")){
        $(this).css({'font-style' : 'italic',
                    'text-shadow' : '2px 2px pink',
                    'font-weight' : 'bold'});
                    }
            },
    function(){
        $(this).css('background-color','white');
             })
             
})