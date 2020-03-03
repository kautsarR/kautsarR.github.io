document.body.addEventListener('touchmove', function (event) {
 const x = Math.round((event.touches[0].clientX / window.innerWidth) * 255);
 const y = Math.round((event.touches[0].clientY / window.innerWidth) * 255);
 document.body.style.backgroundColor = 'rgb(' + x + ',' + y + ', 100)';
});
