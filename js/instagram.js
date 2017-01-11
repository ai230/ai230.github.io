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
            url: "https://api.instagram.com/v1/users/self/follows?access_token=" + token.substr(14),
            method: "get",
            dataType: "JSONP",
            success: function(responce) {
                console.log(responce);
                for (var i = 0; i < responce.data.length; i++) {
                    console.log("ok")
                    $("#followsInfo").append("<div class='col-sm-4 hvr-float'><li><p>" + responce.data[i]["full_name"] + "</p>" + "<img src='" + responce.data[i]["profile_picture"] + "'></li></div>");
                }
            },
        });
    } else {
        console.log("no token")
        document.getElementById("myName").innerHTML = "please login";
    }
});
