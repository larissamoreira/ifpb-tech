const button = document.querySelector("#modalteste");
const modal = document.querySelector("#segunda");
const close = document.querySelector("#close");
var html = document.querySelector('html');

fetch('data/programacao.json')
    .then(res => res.json())
    .then(json => loadProgramacao(json))

function loadProgramacao(programacao) {
    let result = ''    
    const dates = [26, 27, 28, 29, 30]
    const times = ['manhã', 'tarde']
    for (const date of dates) {
        result += `<div id="${date}" class="content-tab" ${date === 26 ? '' : ' style="display: none"'}>
            <div class="columns">`
        for (const time of times) {
            const tasks = programacao
                .filter(p => p.time.time === time && p.time.date === date)
                .map(p => {
                    return `<div class="card row is-three-fifths is-centered">
                        <div class="card-content ">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">${p.title}</p>
                                    <p class="subtitle is-6">${p.people.sort().map(n => `<p class="subtitle is-6 is-marginless">${n}</p>`).join('')}</p>
                                </div>
                            </div>
                            <div class="content">${p.description || '' }</div>
                            <footer class="card-footer">
                                <p class="card-footer-item">${p.place}</p>
                                <time class="card-footer-item">${p.time.begin} às ${p.time.end}</time>
                            </footer>
                        </div>
                    </div>`
                })
                .join('')
            result += `<div class="column">
                            <h1 class="title has-text-centered">${time[0].toUpperCase()+time.slice(1)}</h1>
                            ${tasks}
                        </div>`
        }
        result += `</div></div>`
    }
    document.querySelector('#programacao .grade').innerHTML = result
    loadTabs()
}

function loadTabs() {
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
}

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
