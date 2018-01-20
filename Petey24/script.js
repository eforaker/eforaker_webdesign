$(document).ready(function() {
    $('.mouse').draggable();
	$('.cat').draggable();
	$('.ball').draggable();
	$('.ball2').draggable();
    
$('.breakfast').each(function() {
    var elem = $(this);
    setInterval(function() {
        if (elem.css('visibility') == 'hidden') {
            elem.css('visibility', 'visible');
        } else {
            elem.css('visibility', 'hidden');
        }    
    }, 750);
});
$('.dinner').each(function() {
    var elem = $(this);
    setInterval(function() {
        if (elem.css('visibility') == 'hidden') {
            elem.css('visibility', 'visible');
        } else {
            elem.css('visibility', 'hidden');
        }    
    }, 650);
});

var canvas,
  ctx,
  cx = 100,
  cy = 100,
  vx = 2,
  vy = 5,
  radius = 25,
  gravity = 0.2,
  damping = 0.9,
  traction = 0.8,
  paused = false;
  ;

function init() {

  canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");
  
  canvas.width = 800;
  canvas.height = 500;

  circle();
}

function circle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (!paused)
    requestAnimationFrame(circle);

  if (cx + radius >= canvas.width) {
    vx = -vx * damping;
    cx = canvas.width - radius;
  } else if (cx - radius <= 0) {
    vx = -vx * damping;
    cx = radius;
  }
  if (cy + radius >= canvas.height) {
    vy = -vy * damping;
    cy = canvas.height - radius;
    // traction here
    vx *= traction;
  } else if (cy - radius <= 0) {
    vy = -vy * damping;
    cy = radius;
  }

  vy += gravity; // <--- this is it

  cx += vx;
  cy += vy;

  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'blue';
  ctx.fill();
}

init();

// fancy/irrelevant mouse grab'n'throw stuff below
canvas.addEventListener('mousedown', handleMouseDown);
canvas.addEventListener('mouseup', handleMouseUp);

function handleMouseDown(e) {
  cx = e.pageX - canvas.offsetLeft;
  cy = e.pageY - canvas.offsetTop;
  vx = vy = 0;
  paused = true;
}

function handleMouseUp(e) {
  vx = e.pageX - canvas.offsetLeft - cx;
  vy = e.pageY - canvas.offsetTop - cy;
  paused = false;
  circle();
}
});

