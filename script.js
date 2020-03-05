document.body.addEventListener('touchmove', function (event) {
 const x = Math.round((event.touches[0].clientX / window.innerWidth) * 255);
 const y = Math.round((event.touches[0].clientY / window.innerWidth) * 255);
 let b = Math.round((event.touches[1].clientY / window.innerWidth) * 255);
 if (b == 0) {
  b = 100;
 }
 document.body.style.backgroundColor = 'rgb(' + x + ',' + y + ', '+ b +')';
});
