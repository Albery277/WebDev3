// hero section 

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000, 
};  

ScrollReveal().reveal(".section-title", {
  ...scrollRevealOption, 
  origin: "top",
  delay: 1000, 
  reset: true, 
});
ScrollReveal().reveal(".menu-item", {
  ...scrollRevealOption, 
  interval: 250,
  origin: "top",
  delay: 500,
  reset: true, 
});
