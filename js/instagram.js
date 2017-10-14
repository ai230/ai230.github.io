var token;
var myToken;
$(function () {

    var test = JSON.parse('<?php echo $myJson; ?>');
    //    token = window.location.hash;
    myToken = "4158914349.610596b.e2eb2ea2076f4793ae79b49aa0bc0187";

    //    if (token.substr(0, 14) == "#access_token=") {
    //        showLogout();
    //        //      getMyinfo();
    //    } else {
    //        document.getElementById("noTaken").innerHTML = "please login";
    //        showLogin();
    //    }
    getMyinfo();
});

function showLogin() {
    $('#logIn').show();
    $('#logOut').hide();
}

function showLogout() {
    $('#logOut').show();
    $('#logIn').hide();
}

function getMyinfo() {
    //users/self
    $.ajax({
        //        url: "https://api.instagram.com/v1/users/self/?access_token=" + token.substr(14),
        url: "https://api.instagram.com/v1/users/self/?access_token=" + myToken,
        method: "get",
        dataType: "JSONP",
        success: function (responce) {
            var myName = responce.data["full_name"];
            var myPic = responce.data["profile_picture"];
            var myFollows = responce.data.counts["follows"];
            var myFollowedBy = responce.data.counts["followed_by"];
            $("#mypic").append("<img src='" + myPic + "'>");
            $("#myname").append("<p>" + myName + "</p>");
            $("#myfollows").append("<p>" + myFollows + " following</p>");
            $("#myfollowedby").append("<p>" + myFollowedBy + " followers</p>");
        },
    });
    //GET/users/self/follows
    $.ajax({
        //        url: "https://api.instagram.com/v1/users/self/followed-by?access_token=" + token.substr(14),
        url: "https://api.instagram.com/v1/users/self/followed-by?access_token=" + myToken,
        method: "get",
        dataType: "JSONP",
        success: function (responce) {
            $("#followsInfo").append("<h3>Followed By</h3>");
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

function getImage(followedId) {
    $('#followsInfoPics1').empty();
    $('#followsInfoPics2').empty();
    //GET/users/self/media/recent
    $.ajax({
        //        url: "https://api.instagram.com/v1/users/" + followedId + "/media/recent/?access_token=" + token.substr(14),
        url: "https://api.instagram.com/v1/users/" + followedId + "/media/recent/?access_token=" + myToken,
        method: "get",
        dataType: "JSONP",
        success: function (responce) {
            if (responce.data == undefined || responce.data.length == 0) {
                $("#followsInfoPics2").append("No data found");
            } else {
                var followedInfoName = responce.data[0].caption.from["full_name"];
                var followedInfoPic = responce.data[0].caption.from["profile_picture"];
                $("#followsInfoPics1").append("<img src='" + followedInfoPic + "'><span>" + followedInfoName + "'s Recent Pictures</span>");
                for (var i = 0; i < responce.data.length; i++) {
                    var followedInfoimage = responce.data[i].images.low_resolution["url"];
                    $("#followsInfoPics2").append("<div style='display: inline-block;'><li><img src='" + followedInfoimage + "'></li></div>");
                }
            }
        },
    });
}
