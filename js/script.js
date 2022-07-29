// OPEN - CLOSE NAVBAR
const btn = document.getElementById('check-1');
const navbar = document.querySelector('nav');
const open = document.getElementById('open');
const close = document.getElementById('close');
const hamburger = document.getElementById('hamburger');
const li = document.querySelectorAll('.li');

function check() { 
    if(btn.checked) {
        navbar.classList.add('active')
        open.classList.add('hover')
        hamburger.classList.add('visible');
        close.classList.add('hover-2');
    } else  {
        navbar.classList.remove('active');
        open.classList.remove('hover');
        hamburger.classList.remove('visible');
        close.classList.remove('hover-2');
    }
};
// END OPEN - CLOSE NAVBAR

// SCROLL FİX HEADER
const header = document.getElementById('header');

window.onscroll = function() {onScroll()};
function onScroll () {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('active');
        header.style.zIndex = 3;
        searchInput.style.display = 'none';
    } 

    else {
        header.classList.remove('active');
        header.style.transition = 'all .4s';
        header.style.top = '0'
    }
}

// END SCROLL FİX HEADER

// OPEN SEARCH AREA
const formSearch = document.getElementById('searchInput');
const search = document.getElementById('search');
const closeSearch = document.getElementById('search-btn-close');

search.addEventListener('click', function(e) {
    formSearch.style.height = 'calc(20vh + .9px)';
    formSearch.style.display = 'flex';
    formSearch.style.transition = 'all .5s';

    header.style.top = '8.5rem';
    header.style.transition = 'top .5s';
    
    document.getElementById('inputSearch').focus();
    e.preventDefault();
    
})

closeSearch.addEventListener('click', function focus(e) {
    formSearch.style.height = '0';
    header.style.top = '0'
})
// END OPEN SEARCH AREA

// OPEN-CLOSE FORM
const contactForm = document.getElementById('popup-container');
const contactOpen = document.getElementById('contact-open');
const contactClose = document.getElementById('contact-close');
const sendMes = document.getElementById('link-item');

sendMes.addEventListener('click', function() {
    contactForm.style.display = 'flex';
})

contactOpen.addEventListener('click', function() {
    contactForm.style.display = 'flex';
});

contactClose.addEventListener('click', function close() {
    contactForm.style.display = 'none';
});
// END OPEN-CLOSE FORM

// PRİVİLEGES ACCORDİON
const accBtn = document.querySelectorAll(".privileges-content-1-btn");

for(let i = 0; i < accBtn.length; i++) {

    let acc = accBtn[i];

    acc.addEventListener('click', function() {

        for(let j = 0; j < accBtn.length; j++) {
        
        let act = accBtn[j];
            if(!acc == act && act.classList.contains('active')) {
                act.classList.remove('active');
                act.nextElementSibling.style.maxHeight = null;
            }
        }
        let privileges = acc.nextElementSibling;
        
        privileges.style.maxHeight = (acc.classList.toggle('active') ? (privileges.scrollHeight + "px") : null)
    })
}
// END PRİVİLEGES ACCORDİON