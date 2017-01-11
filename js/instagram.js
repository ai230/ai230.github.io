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
                document.getElementById("myName").innerHTML = responce.data.full_name;
                $("#myprofilePic").append("<img src='" + responce.data["profile_picture"] + "'><br />");
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
                    $("#followsImfo").append(responce.data[i]["full_name"] + "<br />");
                    $("#followsImfo").append("<img src='" + responce.data[i]["profile_picture"] + "'><br />");
                }
            },
        });
    } else {
        console.log("no token")
        document.getElementById("fullName").innerHTML = "please login";
    }
});
