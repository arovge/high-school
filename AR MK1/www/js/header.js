$(document).ready(function() {
  var path = window.location.pathname;
  var subPath = path.substring(0, 2);
  if (subPath == '/') {
    $("#header").load('/includes/aboutHeader.html');
    //console.log(1);
    //console.log(path.substring(0,2));
  } else if (subPath == '/p') {
    $("#header").load('/includes/projectHeader.html');
    //console.log(2);
    //console.log(path.substring(0,2));
  } else if (subPath == '/c') {
    $("#header").load('/includes/contactHeader.html');
  } else {
    console.log(subPath);
  }
});
