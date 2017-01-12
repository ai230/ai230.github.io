$(function() {
    var token = window.location.hash;
    if (token.substr(0, 14) == "#access_token=") {
        console.log(token)
        //users/self
        $.ajax({
            url: "https://api.instagram.com/v1/users/self/?access_token=" + token.substr(14),
            method: "get",
            dataType: "JSONP",
            success: function(responce) {
                console.log(responce);
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
                console.log(responce);
                for (var i = 0; i < responce.data.length; i++) {
                    console.log("ok")
                    var followedName = responce.data[i]["full_name"];
                    var followedUserName = responce.data[i]["username"];
                    var followedPic = responce.data[i]["profile_picture"];
                    $("#followsInfo").append("<div class='hvr-float' style='margin: 10px;'><li><p>" + followedName + "</p><p>" + followedUserName + "</p><img src='" + followedPic + "'></li></div>");
                }
            },
        });
    } else {
        document.getElementById("notaken").innerHTML = "please login";
    }
});
