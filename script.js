document.querySelectorAll('#lesson-list li').forEach((item) => {
    item.addEventListener('mouseenter', () => {
      item.style.backgroundColor = '#9ccc65';
      item.style.color = '#fff';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.backgroundColor = '#fff';
      item.style.color = '#333';
    });
  });
  
  document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
