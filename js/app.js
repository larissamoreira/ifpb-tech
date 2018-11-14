const button = document.querySelector("#modalteste");
const modal = document.querySelector("#segunda");
const close = document.querySelector("#close");
var html = document.querySelector('html');

document.addEventListener('DOMContentLoaded', () => {

    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if ($navbarBurgers.length > 0) {

        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }

});

function openTab(evt, tabTitle) {
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

