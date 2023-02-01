const profileCards = document.getElementsByClassName("profile-card");

// when loading profiles, it loads 12 at a time
async function loadProfiles(numberOfProfiles = 12) { 
    const response = await fetch('http://localhost:3001/api/profiles/');
    const data = await response.json();
    
    // pass the data to the profiles handlebars template to be rendered
    console.log(data);
}

loadProfiles();

// when scrolling down, navbar will be fixed &
// more profiles will load 
// (this needs to be tested)
// window.addEventListener('scroll', () => {
//     navbar.classList.toggle('fixed-top', window.scrollY > 0);

//     if(window.scrollY + window.innerHeight >= 
//     document.documentElement.scrollHeight){
//         loadProfiles();
//     };
// });

// loadProfiles();