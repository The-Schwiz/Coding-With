const baseUrl = location.protocol + '//' + location.host;

// when loading profiles, it loads 12 at a time
async function loadProfiles() { 
    const response = await fetch(`${baseUrl}/api/profiles/`);
    const data = await response.json();
    const profiles = data.map((profile) => profile.get({ plain: true }));
}

loadProfiles();

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