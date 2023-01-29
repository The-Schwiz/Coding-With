const navbar = document.getElementsByClassName('navbar')[0];
const navSearchBtn = document.getElementById('navbar-search-btn');
const sidebar = document.getElementById('sidebar-wrapper');
const content = document.querySelector('main');

// when loading profiles, it loads 12 at a time
async function loadProfiles(numberOfProfiles = 12) { 
    const response = await fetch('http://localhost:3001/api/profiles/');
    const data = await response.json();
    
    // use the dom to populate the page with profiles
    console.log(data);
};

loadProfiles();


// shifts main content of homepage to make room for sidebar
function shiftContent() {
    if(sidebar.classList.contains('show')) {
        content.style.marginLeft = '350px';
    } else {
        content.removeAttribute('style');
    }
}

function oppositeShift() {
    if(sidebar.classList.contains('show')) {
        content.removeAttribute('style');
    } else {
        content.style.marginLeft = '350px';
    }
}

// when scrolling down, navbar will be fixed &
// more profiles will load 
// (this needs to be tested)
window.addEventListener('scroll', () => {
    navbar.classList.toggle('fixed-top', window.scrollY > 0);

    if(window.scrollY + window.innerHeight >= 
    document.documentElement.scrollHeight){
        loadProfiles();
    };
});

// when clicking off the sidebar, it will close
// and content will shift
content.addEventListener('click', () => {
    if(sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        shiftContent();
    } else {
        oppositeShift();
    }
});

// when clicking on the search button, sidebar will open
navSearchBtn.addEventListener('click', () => {
    oppositeShift();
});