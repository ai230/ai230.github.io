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
        //GET/locations/search
        // $.ajax({
        //     url: "https://api.instagram.com/v1/locations/search?lat=49.1744558&lng=-123.1394595&access_token=" + token.substr(14),
        //     method: "get",
        //     dataType: "JSONP",
        //     success: function(responce) {
        //         console.log(responce);
        //         for (var i = 0; i < responce.data.length; i++) {
        //             var locationName = responce.data[i]["name"];
        //             var locationLongitude = responce.data[i]["longitude"];
        //             var locationLatitude = responce.data[i]["latitude"];
        //             var locationId = responce.data[i]["id"];
        //             $("#locationInfo1").append("<div><li><p>" + locationName + "</p><p>");
        //         }
        //     },
        // });
        //GET/locations/location-id/media/recent //"236474258:Lansdowne Centre"
        $.ajax({
            url: "https://api.instagram.com/v1/locations/236474258/media/recent?access_token=" + token.substr(14),
            method: "get",
            dataType: "JSONP",
            success: function(responce) {
                console.log(responce);
                for (var i = 0; i < responce.data.length; i++) {
                    var location2Name = responce.data[i].location["name"];
                    var location2UserName = responce.data[i].caption.from["username"];
                    var location2image = responce.data[i].images.thumbnail["url"];
                    var location2text = responce.data[i].caption["text"];
                    $("#followsInfo").append("<div><li><p>" + location2Name + "</p><p>" + location2UserName + "</p><img src='" + location2image + "'><p>" + location2text + "</p></li></div>");
                }
            },
        });
    } else {
        document.getElementById("notaken").innerHTML = "please login";
    }
});
