// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// GPA Calculator
document.getElementById('calcBtn').addEventListener('click', function() {
  const marks = parseFloat(document.getElementById('marks').value);
  let gpa = '';
  if (marks >= 90) gpa = 'A';
  else if (marks >= 80) gpa = 'B';
  else if (marks >= 70) gpa = 'C';
  else if (marks >= 60) gpa = 'D';
  else gpa = 'F';
  document.getElementById('gpaResult').textContent = `Grade: ${gpa}`;
});

// Project Carousel
document.querySelectorAll('.carousel').forEach(carousel => {
  const images = carousel.querySelectorAll('img');
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');
  let current = 0;

  function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
  }

  prev.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });

  next.addEventListener('click', () => {
    current = (current + 1) % images.length;
    showImage(current);
  });

  // Mobile swipe
  let startX = 0;
  let endX = 0;
  carousel.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  carousel.addEventListener('touchmove', e => endX = e.touches[0].clientX);
  carousel.addEventListener('touchend', () => {
    const diff = startX - endX;
    if (diff > 50) current = (current + 1) % images.length;
    else if (diff < -50) current = (current - 1 + images.length) % images.length;
    showImage(current);
  });

  showImage(current);
});