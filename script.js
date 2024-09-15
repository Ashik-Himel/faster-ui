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

// Get In Touch From Submission
const getInTouchForm = document.getElementById('get-in-touch-form');
getInTouchForm.addEventListener('submit', e => e.preventDefault());