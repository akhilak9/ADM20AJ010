$(document).ready(function(){
    
    var para = $('p');
    $('#btn').click(function(){
    if (para.parent().is('div')) {
      para.unwrap();
    } else {
      para.wrap('<div>');
    }
    })
})