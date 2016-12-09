$(function(){
  $("#moveToWork").click(function(){
      $('body').animate({
         scrollTop: $("#toWork").offset().top
      }, 'slow');
  });
});
