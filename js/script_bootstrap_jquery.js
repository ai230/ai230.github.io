// // javascript
// document.addEventListener("DOMContentLoaded",function(){
// });
//
// // jQuery
// $(document).ready(funcution(){
//
// });
//
// // jQuery - short.ver
// $(funcution(){
//
// });

// same as "onclick" in javascript
// when you click Login button say "HI"
$(function(){
  $("#btnLogin").click(function(){
    // window.alert("HI");

    // var email = document.getElementById("inEmail").value;
    var email=$("#inEmail").val();
    // var password = document.getElementById("inpassword").value;
    var password=$("#inpassword").val();
    // var resultEl = document.getElementById("result");
    var resultEl=$("#result");

    resultEl.removeClass();

    if (email == "ai@gmail.com" && password == 123){
      // resultEl.className = "bg-success";
      // resultEl.innerHTML = "The user has loged in";
      resultEl.addClass("bg-success")
              .html("The user has loged in");
    }else{
      // resultEl.className = "bg-danger";
      // resultEl.InnerHTML = "Incorrect";
      resultEl.addClass("bg-danger")
              .html("Incorrect");
    }
  });
});
