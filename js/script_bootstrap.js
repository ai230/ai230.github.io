function myclick(){
  var email = document.getElementById("inEmail").value;
  var password = document.getElementById("inpassword").value;

  var resultEl = document.getElementById("result");
  if (email == "ai@gmail.com" && password == 123){
    resultEl.className = "bg-success";
    resultEl.innerHTML = "The user has loged in";
  }else{
    resultEl.className = "bg-danger";
    resultEl.InnerHTML = "Incorrect";
  }
}
