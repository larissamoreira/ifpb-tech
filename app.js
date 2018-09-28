const butao = document.querySelector("#modalteste");
const modal = document.querySelector("#segunda");
const close = document.querySelector("#close");
var html = document.querySelector('html');

/*butao.addEventListener('click', function(){
    modal.classList.add("is-active");
    html.classList.add('is-clipped');
})

/*close.addEventListener('click', function(){
    modal.classList.remove("is-active");
    html.classList.remove('is-clipped');
})
*/
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

openTab(null, 26)