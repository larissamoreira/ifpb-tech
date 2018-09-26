const butao = document.querySelector("#modalteste");
const modal = document.querySelector("#segunda");
const close = document.querySelector("#close");
var html = document.querySelector('html');

butao.addEventListener('click', function(){
    modal.classList.add("is-active");
    html.classList.add('is-clipped');
})

close.addEventListener('click', function(){
    modal.classList.remove("is-active");
    html.classList.remove('is-clipped');
})

function openTab(evt, tabTitle) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("content-tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabTitle).style.display = "block";
    evt.currentTarget.className += " active";
}