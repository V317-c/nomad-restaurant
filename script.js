
    // loader start 
    var preloader = document.getElementById('loading');

    function loadFunction() {
     
     setTimeout(function() {
         preloader.style.display = 'none';
     }, 2800); // 2000 milliseconds = 2 seconds
 }
  // loader end

  // navbar start
  // define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}
  // navbar end

  var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  }); 


  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    pagination: {
      el: ".second_swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".second_swiper-button-next",
      prevEl: ".second_swiper-button-prev",
    },
    breakpoints: { 
      768: {
        slidesPerView: 2.5,
        spaceBetween: 40,
      },
      1000:{
        slidesPerView: 3.5,
        spaceBetween: 40,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
    autoplay: {
      delay: 2500,
      
    },
   
  });