var token = window.location.hash;

function getMyinfo() {
    if (token.substr(0, 14) == "#access_token=") {
        console.log("hi")
        console.log(token)
        $.ajax({
            url: "https://api.instagram.com/v1/users/self/?access_token=" + token.substr(14),
            method: "get",
            dataType: "JSONP",
            success: function(responce) {
                console.log(responce);
                document.getElementById("fullName").innerHTML = responce.data.full_name;
                document.getElementById("id").innerHTML = responce.data.id;
                document.getElementById("userName").innerHTML = responce.username;
                document.getElementById("followedBy").innerHTML = responce.counts.followed_by;
                
            },
        });
    } else {
        console.log("no token")
        document.getElementById("fullName").innerHTML = "please login";
    }
}
