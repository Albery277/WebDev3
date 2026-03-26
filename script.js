const navLinks = document.querySelectorAll('.nav-menu .nav-link');
const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener('click', () => {
    //open mobile menu
    document.body.classList.toggle('show-mobile-menu');
});

//close mobile menu
menuCloseButton.addEventListener('click', () => menuOpenButton.click());

// close when navlink is on
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});




//Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    },
  }

});













//Scroll reveal design 

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000, 
}; 

// all section title toh
ScrollReveal().reveal(".section-title", {
  ...scrollRevealOption, 
  distance: "50px",
  origin: "top",
  duration: 1500,
  reset: true, 
});


// hero section 
ScrollReveal().reveal(".hero-image-wrapper img", {
  ...scrollRevealOption, 
  origin: "right",
  reset: true, 
});
ScrollReveal().reveal(".title", {
  ...scrollRevealOption, 
  origin: "top",
  delay: 500,
  reset: true, 
});
ScrollReveal().reveal(".subtitle", {
  ...scrollRevealOption, 
  origin: "top",
  delay: 1000,
  reset: true, 
});
ScrollReveal().reveal(".description", {
  ...scrollRevealOption, 
  origin: "top",
  delay: 1500,
  reset: true, 
});
ScrollReveal().reveal(".order-now", {
  ...scrollRevealOption, 
  origin: "top",
  delay: 2000,
  reset: true, 
});
ScrollReveal().reveal(".contact-us", {
  ...scrollRevealOption, 
  origin: "top",
  delay: 2500,
  reset: true, 
});

//about-section reveal 
ScrollReveal().reveal(".about-details .text", {
  ...scrollRevealOption, 
  distance: "50px",
  origin: "bottom",
  duration: 2000,
  reset: true, 
});


//Menu section 
ScrollReveal().reveal(".menu-item .text", {
  ...scrollRevealOption, 
  distance: "50px",
  origin: "bottom",
  duration: 2000,
  reset: true, 
}); 
ScrollReveal().reveal(".menu-item .name", {
  ...scrollRevealOption, 
  distance: "50px",
  origin: "top",
  duration: 1500,
  reset: true, 
}); 

//Review Section

ScrollReveal().reveal(".ani1", {
  ...scrollRevealOption,
  delay: 250,
  reset: true, 
  origin: "left"
}); 
ScrollReveal().reveal(".ani2", {
  ...scrollRevealOption,
  delay: 500,
  reset: true, 
  origin: "left"
}); 
ScrollReveal().reveal(".ani3", {
  ...scrollRevealOption,
  delay: 1000,
  reset: true, 
  origin: "left"
}); 


ScrollReveal().reveal(".developers-list", {
  ...scrollRevealOption,
  distance: "50px",
  delay: 150,
  reset: true, 
  origin: "bottom"
}); 

//contact section
ScrollReveal().reveal(".contact-info", {
  ...scrollRevealOption,
  interval: 200,
  delay: 250,
  reset: true, 
  origin: "left"
}); 

ScrollReveal().reveal(".form-input", {
  ...scrollRevealOption,
  interval: 200,
  delay: 250,
  reset: true, 
  origin: "right"
}); 

ScrollReveal().reveal(".submit-button", {
  ...scrollRevealOption,
  interval: 200,
  delay: 250,
  reset: true, 
  origin: "bottom"
}); 


