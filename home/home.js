let lastScrollTop = 0;

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const heading = document.querySelector('h1');
  const tagline = document.querySelector('.tagline');
  const oval = document.querySelector('#oval-shape');

  if (scrollTop > 10) {
    // Scroll out
    heading.classList.remove('visible');
    tagline.classList.remove('visible');
    oval.style.transform = 'translateX(-100%) translateY(-50%) rotate(-15deg)';
    oval.style.opacity = '0';
  } else {
    // Scroll back to top ? bring them in
    heading.classList.add('visible');
    tagline.classList.add('visible');
    oval.style.transform = 'translateX(0) translateY(-50%) rotate(-15deg)';
    oval.style.opacity = '1';
  }

  lastScrollTop = scrollTop;
}

window.addEventListener('scroll', handleScroll);

window.addEventListener('load', () => {
  const heading = document.querySelector('h1');
  const tagline = document.querySelector('.tagline');
  const oval = document.querySelector('#oval-shape');

  setTimeout(() => {
    heading.classList.add('visible');
    tagline.classList.add('visible');
    oval.style.transform = 'translateX(0) translateY(-50%) rotate(-15deg)';
    oval.style.opacity = '1';
  }, 100);
});

document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "../login/login.html";
});
