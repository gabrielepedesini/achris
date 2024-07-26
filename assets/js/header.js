/* navbar */

let navbarStatus = false;
var hamburger = document.querySelector('.hamburger');

function openNav() {

  toggleHamburger();
  document.getElementById("myNav").style.width = "100%";
  navbarStatus = true;
}
  
function closeNav() {
  
  toggleHamburger();
  document.getElementById("myNav").style.width = "0%";
  navbarStatus = false;
}

function toggleHamburger() {
  hamburger.classList.toggle('is-active');
}

hamburger.addEventListener("click", function() {

  if(navbarStatus) {
    closeNav();
  } else {
    openNav();
  }
})

/* background color on scroll */

// const navbar = document.querySelector('.navbar');

// window.addEventListener('scroll', function() {

//   var scrollY = window.scrollY;

//   if (scrollY >= 50) {
//     navbar.classList.add('navbar-background');
// } else {
//     navbar.classList.remove('navbar-background');
// }

// });
