document.getElementById('year').textContent = new Date().getFullYear();

const toggleBtn = document.getElementById('toggleMode');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

const calcBtn = document.getElementById('calcBtn');
const gpaResult = document.getElementById('gpaResult');

calcBtn.addEventListener('click', () => {
  const marks = parseFloat(document.getElementById('marks').value);
  if (isNaN(marks) || marks < 0 || marks > 100) {
    gpaResult.textContent = 'Enter a valid mark (0-100)';
    gpaResult.style.color = 'red';
    gpaResult.style.opacity = 1;
    gpaResult.style.transform = 'translateY(0)';
    return;
  }

  let gpa = '';
  if (marks >= 90) gpa = 'A';
  else if (marks >= 80) gpa = 'B';
  else if (marks >= 70) gpa = 'C';
  else if (marks >= 60) gpa = 'D';
  else gpa = 'F';

  gpaResult.textContent = `Grade: ${gpa}`;
  gpaResult.style.color = '#007bff';
  gpaResult.style.opacity = 1;
  gpaResult.animate([{ transform: 'translateY(-10px)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }], { duration: 500, easing: 'ease-out' });
});

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent!');
});

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

  let startX = 0, endX = 0;
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