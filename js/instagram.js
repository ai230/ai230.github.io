$("#apiData").click(function() {
    $.ajax({
        url: "https://api.instagram.com/v1/users/self/?access_token=4158914349.610596b.e2eb2ea2076f4793ae79b49aa0bc0187",
        method: 'get',
        data: 'data'
        // success: success,
        // dataType: dataType
    });
    console.log(data);
});
