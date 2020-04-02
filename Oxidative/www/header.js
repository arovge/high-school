$(document).ready(function() {
  window.scrollTo(0,0);
  var element = $('#header');
  function log(txt) {
  //console.log(txt);
}

$(function() {
  var eTop = $('#header').offset().top; //get the offset top of the element
  log(eTop - $(window).scrollTop()); //position of the ele w.r.t window

  $(window).scroll(function() { //when window is scrolled
    var lognum = eTop - $(window).scrollTop();
    log(lognum);
    if(lognum <= 165) {
      $('#header').css({"margin-top":"-500px","position":"fixed"});
      //console.log('yes');
      /*if(lognum >= 145) {
        $('#header').css({"height":"100px"});
      }*/
    } else if(lognum > 165) {
      $('#header').css({"margin-top":"0px","position":"absolute"});
      //console.log('no');
    }
  });
});
});
