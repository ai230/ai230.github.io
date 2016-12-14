$(function(){
    $.ajax({
      url:"http://api.ideiadoluiz.com.br/email/?contactName=Luiz&email=hahaha&comments=YAY&to=ay36230m@gmail.com",
      success: function(response){

          $("#tdTodo").append(response);
      },
      error: function(err){
        alert("error:");
      }
    });
});
