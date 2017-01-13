var token;
$(function() {
    token = window.location.hash;
    if (token.substr(0, 14) == "#access_token=") {
      showLogout();
      getMyinfo();
    } else {
        document.getElementById("noTaken").innerHTML = "please login";
        showLogin();
    }
});
function getImage(followedId){
    $('#followsInfoPics').empty()
    //GET/users/self/media/recent
    $.ajax({
        url: "https://api.instagram.com/v1/users/" + followedId + "/media/recent/?access_token=" + token.substr(14),
        method: "get",
        dataType: "JSONP",
        success: function(responce) {
            if (responce.data == undefined || responce.data.length == 0) {
                $("#followsInfoPics").append("No data found");
            } else {
                for (var i = 0; i < responce.data.length; i++) {
                    var followedInfoimage = responce.data[i].images.low_resolution["url"];
                    $("#followsInfoPics").append("<div style='display: inline-block;'><li><img src='" + followedInfoimage + "'></li></div>");
                }
            }
        },
    });
}
function showLogin(){
  $('#logIn').show();
  $('#logOut').hide();
}
function showLogout(){
  $('#logOut').show();
  $('#logIn').hide();
}
function getMyinfo(){
  //users/self
  $.ajax({
      url: "https://api.instagram.com/v1/users/self/?access_token=" + token.substr(14),
      method: "get",
      dataType: "JSONP",
      success: function(responce) {
          var myName = responce.data["full_name"];
          var myPic = responce.data["profile_picture"];
          var myFollows = responce.data.counts["follows"];
          var myFollowedBy = responce.data.counts["followed_by"];
          $("#mypic").append("<img src='" + myPic + "'>");
          $("#myname").append("<p>" + myName + "</p>");
          $("#myfollows").append("<p>" + myFollows + " followers</p>");
          $("#myfollowedby").append("<p>" + myFollowedBy + " following</p>");
      },
  });
  //GET/users/self/follows
  $.ajax({
      url: "https://api.instagram.com/v1/users/self/followed-by?access_token=" + token.substr(14),
      method: "get",
      dataType: "JSONP",
      success: function(responce) {
          for (var i = 0; i < responce.data.length; i++) {
              var followedName = responce.data[i]["full_name"];
              var followedUserName = responce.data[i]["username"];
              var followedPic = responce.data[i]["profile_picture"];
              var followedId = responce.data[i]["id"];
              $("#followsInfo").append("<div class='hvr-bubble-float-bottom'><li><p>" + followedName + "</p><p>" + followedUserName + "</p><img onclick='getImage(" + followedId + ")' src='" + followedPic + "'></li></div>");
          }
      },
  });
}
