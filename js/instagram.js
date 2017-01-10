var token = window.location.hash;
//users/self
function getMyinfo1() {
    if (token.substr(0, 14) == "#access_token=") {
        console.log(token)
        $.ajax({
            url: "https://api.instagram.com/v1/users/self/?access_token=" + token.substr(14),
            method: "get",
            dataType: "JSONP",
            success: function(responce) {
                console.log(responce);
                document.getElementById("fullName").innerHTML = responce.data.full_name;
                document.getElementById("id").innerHTML = responce.data.id;
                document.getElementById("userName").innerHTML = responce.data.username;
                document.getElementById("followedBy").innerHTML = responce.data.counts.followed_by;
                document.getElementById("profilePic").innerHTML = responce.data.profile_picture;
            },
        });
    } else {
        console.log("no token")
        document.getElementById("fullName").innerHTML = "please login";
    }
}
//GET/users/self/media/recent
function getMyinfo2() {
    if (token.substr(0, 14) == "#access_token=") {
        console.log(token)
        $.ajax({
            url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + token.substr(14),
            method: "get",
            dataType: "JSONP",
            success: function(responce) {
                console.log("2");
                console.log(responce);
                var imgUrl = responce.data[0].images.standard_resolution.url;
                document.getElementById("image").innerHTML = imgUrl;
                document.getElementById("text").innerHTML = responce.data[0].caption.text;
                document.getElementById("showImage").setAttribute("src", imgUrl);
            },
        });
    } else {
        console.log("no token")
        document.getElementById("image").innerHTML = "please login";
    }
}
//GET/users/self/media/recent
function getMyinfo3() {
    if (token.substr(0, 14) == "#access_token=") {
        console.log(token)
        $.ajax({
            url: "https://api.instagram.com/v1/users/self/follows?access_token=" + token.substr(14),
            method: "get",
            // dataType: "JSONP",
            success: function(responce) {
                console.log("3");
                console.log(responce);
            },
        });
    } else {
        console.log("no token")
        document.getElementById("image").innerHTML = "please login";
    }
}
