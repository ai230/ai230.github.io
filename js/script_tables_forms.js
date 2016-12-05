function Formclicked(){
//  window.alert("the form has been clicked!");
  var Email=document.getElementById('inEmail').value;
  var password=document.getElementById('inpassword').value;

  //window.alert("E-mail; " + Email + " Password; " + password);

  if (Email == "ai@gmail.com" && password == 123456){
    window.alert("the user has logged in");
  }else{
    window.alert("Incorrect password");
  }
}
