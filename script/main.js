/**
 * Navigation
 */

const navToggle = document.querySelector(".js-mobile-nav-toggle");
const mainNav = document.querySelector(".js-main-nav-wrap");
const mainNavList = document.querySelector(".js-main-nav");

navToggle.addEventListener('click', handleNavToggle)
mainNav.addEventListener('click', handleNavToggle )
mainNavList.addEventListener('click', (e) => { e.stopPropagation(); } )


function handleNavToggle() {
  mainNav.hasAttribute('data-visible') 
  ? navToggle.setAttribute('aria-expanded', false) 
  : navToggle.setAttribute('aria-expanded', true);
  mainNav.toggleAttribute('data-visible');
}