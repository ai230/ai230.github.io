$(function(){
  //  window.alert("hi");
  $("#div1").click(function(){
    $("#div2").slideToggle();
  });

  $("#div2").click(function(){
    // $(".div2child").toggle();
    // $(".div2child").css("color","#ff0000");
    $(".div2child").animate(
      {
        top:"90%", left:"90%"
      },
      5000,
      function(){
        // $(".div2child").css(
        $(this).css(
          {
            top:"0px", left:"0px"
          });
      });
  });

});

// $(function(){
//
//   window.setInterval(function () {
//       $("#div2").slideToggle();
//   }, 1000);
//
// });

// //come back!!!!!!
// $("#div2").click(function(){
//   // $(".div2child").toggle();
//   // $(".div2child").css("color","#ff0000");
//   $(".div2child").animate(
//     {top:"100%", left:"100%"},
//     5000,
//     function(){
//       $(".div2child").animate({top:"0%", left:"0%"},5000);
//     });
// });
//
// });
