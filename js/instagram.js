var token = window.location.hash;

function getMyinfo() {
    if (token.substr(0, 14) == "#access_token=") {
        console.log("hi")
        console.log(token)
        $.ajax({
            url: "https://api.instagram.com/v1/users/self/?access_token="+token.substr(14),
            method: "get",
            dataType: "JSONP",
            success: function(responce) {
                console.log(responce);
                document.getElementById("fullName").innerHTML = responce.data.full_name;
            },
        });
    } else {
        console.log("no token")
        document.getElementById("fullName").innerHTML = "please login";
    }


}
