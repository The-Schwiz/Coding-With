console.log('From static script');


async function loadProfiles() { 
    const response = await fetch('http://localhost:3001/api/profiles/');
    const data = await response.json();
    
    // use the dom to populate the page with profiles
    console.log(data);
}

loadProfiles();