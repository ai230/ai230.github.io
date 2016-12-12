//
// $(function(){
//     $.ajax({
//       url:"http://api.ideiadoluiz.com.br/gyukaku/public/generalData",
//       success: function(response){
//         alert("success:");
//       },
//       error: function(err){
//         alert("error:" + err);
//       }
//     });
// });

$(function(){
    $.ajax({
      url:"http://api.ideiadoluiz.com.br/gyukaku/public/generalData",
      success: function(response){
        var i=0;
        while(i < response.roles.length){
          var myroles = response.roles[i];
          var myHtml = "<tr>"+
                        "<td>" + myroles.id + "</td>" +
                        "<td>"+ myroles.role + "</td>"
                        +"</tr>";

          $("#tableLocationBody").append(myHtml);
                  i = i + 1;
        }
      },
      error: function(err){
        alert("error:" + err);
      }
    });
});
