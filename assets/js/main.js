/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')

// Script para animar las secciones al hacer scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.footer-section');
    sections.forEach((section) => {
      const position = section.getBoundingClientRect();
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        section.classList.add('animate');
      } else {
        section.classList.remove('animate');
      }
    });
  });
  
