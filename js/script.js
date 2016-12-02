var leftspan = 0;
var topspan = 0;

function btnmoveclicked(){
  leftspan = leftspan +10;
  var div_move = document.getElementById('div_move');
  div_move.style.left = leftspan;
    if(leftspan > 500){
      leftspan = 0;
    }
}
function mdlmove(){
  topspan = topspan +10;
  var span_title = document.getElementById('span_title');
  span_title.style.top = topspan;
    // if(topspan > 100){
    //   topspan = 0;
      if (topspan > span_title.parentElement.clientHeight - topspan) {
        topspan = 0;
      }
}

document.addEventListener("DOMContentLoaded",function(){
  window.setInterval(btnmoveclicked, 100);
  window.setInterval(mdlmove, 100);
});




//window.setTimeout
