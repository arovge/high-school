/*var canvas = document.getElementById('canvas');

if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  alert('Your browser does not currently support <canvas>');
}*/
/*
  fillRect(x, y, width, height)
*/
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    console.log('Canvas success');

    ctx.fillStyle = "rgb(71, 192, 163)";
    ctx.fillRect (10, 10, 50, 50);

    ctx.fillStyle = "rgba(184, 38, 38, 0.5)";
    ctx.fillRect (30, 30, 50, 50);

  } else {
    alert('Your browser does not currently support <canvas>');
  }
}

var up, down, left, right = false;

function onKeyDown(e) {
  if (e.keyCode == 87 || e.keyCode == 38) {
    up = true;
  } else if (e.keyCode == 83 || e.keyCode == 40) {
    down = true;
  } else if (e.keyCode == 65 || e.keyCode == 37) {
    left = true;
  } else if (e.keyCode == 68 || e.keyCode == 39) {
    right = true;
  }
}

function onKeyUp(e) {
  if ((e.keyCode == 65 || e.keyCode == 37) && (left)) {
    left = false;
  } else if ((e.keyCode == 68 || e.keyCode == 39) && (right)) {
    right = false;
  } else if ((e.keyCode == 87 || e.keyCode == 38) && (up)) {
    up = false;
  } else if ((e.keyCode == 83 || e.keyCode == 40) && (down)) {
    down = false;
  }
}

$(document).ready(function() {
  $(document).keydown(onKeyDown);
  $(document).keyup(onKeyUp);

  while(up) {
    x++;
  }
});
