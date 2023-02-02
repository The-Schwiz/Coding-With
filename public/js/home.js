const navbar = document.getElementsByClassName('navbar')[0];
const navSearchBtn = document.getElementById('navbar-search-btn');
const sidebar = document.getElementById('sidebar-wrapper');
const content = document.querySelector('main');
const footer = document.querySelector('h5');

// shifts main content of homepage to make room for sidebar
function shiftContent() {
    if(sidebar.classList.contains('show')) {
        content.style.marginLeft = '350px';
        footer.style.marginLeft = '350px';
    } else {
        content.removeAttribute('style');
        footer.removeAttribute('style');
    }
}

function oppositeShift() {
    if(sidebar.classList.contains('show')) {
        content.removeAttribute('style');
        footer.removeAttribute('style');
    } else {
        content.style.marginLeft = '350px';
        footer.style.marginLeft = '350px';
    }
}

// when clicking off the sidebar, it will close
// and content will shift
content.addEventListener('click', () => {
    if(sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        shiftContent();
    } else {
        oppositeShift();
    }
}, {once: true});

// when clicking on the search button, sidebar will open
navSearchBtn.addEventListener('click', oppositeShift);