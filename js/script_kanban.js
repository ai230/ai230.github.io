$(function(){
    $.ajax({
      url:"http://api.ideiadoluiz.com.br/postit",
      success: function(response){

          $("#tdTodo").append(response);
      },
      error: function(err){
        alert("error:");
      }
    });
});
