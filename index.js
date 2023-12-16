window.addEventListener('scroll', () => {
  var FloatBtn = document.querySelector('.FloatBtn');

  if (window.pageYOffset > 160) { 
    FloatBtn.style.display = 'block';
  } else {
    FloatBtn.style.display = 'none';
  }

  if (window.pageYOffset > 800) {
    FloatBtn.classList.add('fixed');
  } else {
    FloatBtn.classList.remove('fixed');
  }
});

document.addEventListener('scroll', function() {
  for(let p of document.querySelectorAll('article p')){
    if (p.getBoundingClientRect().top - window.innerHeight+100 <= 0) {
      p.classList.add('visible');
    } else {
      p.classList.remove('visible');
    }
  }
});