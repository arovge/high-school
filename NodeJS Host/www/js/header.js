$(document).ready(function() {
  var path = window.location.pathname;
  var subPath = path.substring(0, 2);
  if (subPath == '/') {
    $("#header").load('/js/headerAbout.html');
    //console.log(1);
    //console.log(path.substring(0,2));
  } else if (subPath == '/p') {
    $("#header").load('/js/headerProjects.html');
    //console.log(2);
    //console.log(path.substring(0,2));
  } else if (subPath == '/c') {
    $("#header").load('/js/headerContact.html');
  } else {
    console.log(subPath);
  }
});
