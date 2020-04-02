$(document).ready(function() {
  //redo so it only functions when mousing over it's #pageButton. too taxing now
  $(document).mousemove(function(e) {
    $("#calculatorMB").css({left:e.pageX - 315, top:e.pageY});
  });
  $(document).mousemove(function(e) {
    $("#hereticsMB").css({left:e.pageX - 315, top:e.pageY});
  });
  $(document).mousemove(function(e) {
    $("#chatv1MB").css({left:e.pageX - 315, top:e.pageY});
  });
  $(document).mousemove(function(e) {
    $("#chatv2MB").css({left:e.pageX - 315, top:e.pageY});
  });
});
