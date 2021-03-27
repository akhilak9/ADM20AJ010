$(document).ready(function(){
    $('#btn').click(function(){
       var text =$('#text').val();
        $('p').html('<p>'+text+'<p>');
    })
    $('p').click(function(){
        let emoji = document.createElement("img");
    emoji.src ="smiley.png";
    emoji.width = 50;
    emoji.height = 50;
    $(this).replaceWith(emoji);
    })
})