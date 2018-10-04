const button = document.querySelector("#modalteste");
const modal = document.querySelector("#segunda");
const close = document.querySelector("#close");
var html = document.querySelector('html');

/*button.addEventListener('click', function(){
    modal.classList.add("is-active");
    html.classList.add('is-clipped');
})

/*close.addEventListener('click', function(){
    modal.classList.remove("is-active");
    html.classList.remove('is-clipped');
})
*/
var myNav = document.getElementById('myNav');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 50 ) {
        myNav.classList.add("is-success");
        myNav.classList.remove("nav-transparent");
    } 
};

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });

function openTab(evt, tabTitle) {
    console.log(tabTitle)
    var i, tabcontent, tabs;
    tabcontent = document.querySelectorAll(".content-tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabs = document.querySelectorAll("#tablinks");
    console.log(tabs[0].classList)
    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    document.getElementById(tabTitle).style.display = "block";
    evt.currentTarget.className = "active";
}

