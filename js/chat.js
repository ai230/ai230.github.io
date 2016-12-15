$(function(){

  var url = "http://api.ideiadoluiz.com.br/chat/code.php";
  var varCounter = 0;
  var varName = prompt("What is your name?");

  //listner
  $("#btnSend").click(function(){
    // alert("hi");
    //if the messaage is e
    if($("#textMessage").val() == ""){
      return;
    }

    //if the server to save the messaage
    var request = $.post(url,{
      type: "send",
      name: varName,
      message: $("#textMessage").val()
    });

    //if fail
    request.fail(function(err){
      console.log("error");
    });

    //if
    request.always(function(){
      $("#textMessage").val("");
    });



  });

  //forever loop in a thread
  //it will be called every second
  setInterval(function(){
    // console.log("1 second");

    var request = $.post(url,{
      type: "get",
      counter: varCounter
    });
    request.fail(function(err){
      console.log("error");
    });
    request.done(function(data){
      //set the couter to the last message couter
      varCounter=data.lastCounter;
      var i = 0;
      while(i<data.messages.length){
          var message = data.messages[i].user + ":" +
                        data.messages[i].value + "\n";
          //"\n" new line
          $("#textChat").append(message);
          i=i+1;
      }
      $("#textChat").scrollTop($("#textChat")[0].scrollHeight);

    });
  },1000);
});
