// Sidebar
const bar = document.getElementById('bar');
const XMark = document.getElementById('x-mark');
const sidebar = document.getElementById('sidebar');
const links = document.querySelectorAll('#sidebar a');
const buttons = document.querySelectorAll('#sidebar button');

bar.addEventListener('click', () => {
  sidebar.style.right = '0px';
});
XMark.addEventListener('click', () => {
  sidebar.style.right = '-310px';
});
links.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.style.right = '-310px';
  });
})
buttons.forEach(button => {
  button.addEventListener('click', () => {
    sidebar.style.right = '-310px';
  });
});

// Swiper Slider
const swiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 15,
  loop: true,
  initialSlide: 2,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// Get In Touch From Submission
const getInTouchForm = document.getElementById('get-in-touch-form');
getInTouchForm.addEventListener('submit', e => {
  e.preventDefault();
  e.target.reset();
  alert('Message sent successfully!');
});