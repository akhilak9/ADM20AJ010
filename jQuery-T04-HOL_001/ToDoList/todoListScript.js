$(document).ready(function(){

    $('#addTask').click(function(){
        var task = $('#task').val();
        if(task==""){
            alert("Enter task details");
        }
        else{
            oldtask=$('#todaysTask').html();
            task=oldtask + "<br>" +task;
            
            $("#task").val("");
           $("#todaysTask").html(task);
        }
        
    })


})