const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});

// test 
document.addEventListener('click', e => {
  if(!offScreenMenu.contains(e.target) && e.target !== offScreenMenu) {
  
  }
})
