var token = window.location.hash;
function getMyinfo() {
    if (token.substr(0, 14) == "#access_token=") {
        console.log(token)
        //users/self
        $.ajax({
            url: "https://api.instagram.com/v1/users/self/?access_token=" + token.substr(14),
            method: "get",
            dataType: "JSONP",
            success: function(responce1) {
                console.log(responce1);
                document.getElementById("fullName").innerHTML = responce1.data.full_name;
                document.getElementById("profilePic").innerHTML = responce1.data.profile_picture;
                // document.getElementById("profilePic").setAttribute("src", imgUrl);
            },
        });
        //GET/users/self/follows
        $.ajax({
            url: "https://api.instagram.com/v1/users/self/follows?access_token=" + token.substr(14),
            method: "get",
            dataType: "JSONP",
            success: function(responce2) {
                console.log(responce2);
                document.getElementById("followsfullName").innerHTML = responce2.data[0].full_name;
                document.getElementById("followsprofilePic").innerHTML = responce2.data[0].profile_picture;
            },
        });
    } else {
        console.log("no token")
        document.getElementById("fullName").innerHTML = "please login";
    }
}
