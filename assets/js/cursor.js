(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
  })();
  
const fake_cursor = document.querySelector('.fake_cursor');
document.body.addEventListener("mousemove", function(event){
  fake_cursor.style.top = event.y + 'px';
  fake_cursor.style.left = event.x + 'px';
});
