const black = document.querySelector('.blacky');
window.onmousemove = function(e){
  const x = e.clientX;
  black.style.left = x + 'px';
}