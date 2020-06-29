const bullet = document.querySelector('.bullet');
const navs = document.querySelector('.nav-links');
const image = document.querySelector('.three-images');
const navlink = document.querySelectorAll('.nav-links li');

bullet.addEventListener('click', (e) => {
  navs.classList.toggle('nav-active');
  image.classList.toggle('nointro');
  // Links Animation
  navlink.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navlinkfade 0.5s ease forwards ${index / 4.5 + 0.3}s`;
    }
  })
  // Bullet Animation
  bullet.classList.toggle('toggle');
});




const form = document.querySelector('#form');
const mail = document.querySelector('#mail');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (mail.value === '') {
    mail.parentElement.classList.add('error');
  }else {
    mail.parentElement.classList.remove('error');
    if(mail.type == 'email'){
      if (validateEmail(mail.value)) {
        mail.parentElement.classList.remove('error');
      }else {
        mail.parentElement.classList.add('error');
      }
    }
  }
})

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
} 