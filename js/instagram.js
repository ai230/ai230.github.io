var token = window.location.hash;
//users/self
function getMyinfo1() {
    if (token.substr(0, 14) == "#access_token=") {
        console.log(token)
        $.ajax({
            url: "https://api.instagram.com/v1/users/self/?access_token=" + token.substr(14),
            method: "get",
            dataType: "JSONP",
            success: function(responce1) {
                console.log(responce1);
                document.getElementById("fullName").innerHTML = responce1.data.full_name;
                document.getElementById("id").innerHTML = responce.data.id;
                document.getElementById("userName").innerHTML = responce.username;
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
            success: function(responce2) {
                console.log("2");
                console.log(responce2);
                document.getElementById("image").innerHTML = responce2.data.images.standard_resolution;
                // document.getElementById("id").innerHTML = responce.data.id;
                // document.getElementById("userName").innerHTML = responce.username;
                // document.getElementById("followedBy").innerHTML = responce.data.counts.followed_by;
                // document.getElementById("profilePic").innerHTML = responce.data.profile_picture;
            },
        });
    } else {
        console.log("no token")
        document.getElementById("image").innerHTML = "please login";
    }
}
