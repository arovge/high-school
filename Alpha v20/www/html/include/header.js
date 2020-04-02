$(document).ready(function() {
  $("#header").load('/include/header.html');

  //WIP AFTER THIS LINE
  var path = window.location.pathname;
  if (path == '/') {
    console.log(1);
  } else {
    console.log(11);
  }
});
