$(document).ready(function(){
    $('#div1').click(function(){
        $(this).css("background-color", "yellow");
    })
    $('#div2').click(function(){
        $(this).css("background-color", "green");
    })
    $('#div3').click(function(){
        $(this).css("background-color", "red");
    })
    $('#div4').click(function(){
        $(this).css("background-color", "pink");
    })
    var box;
    $('#btn').click(function(){
        if (box) {
            box.appendTo('body');
            $('div').css('display','block');
            $('div').css('margin','0px 0px 2px 0px');
            box = null;
          } else {
            box = $('div').detach();
          }
    })
})