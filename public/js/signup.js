console.log('Signup script');

let email;
let password;
let confirmPassword;
let name;
let bio;
let experience;
let tech;
let userLocation;
let other;
let linkedinLink;
let githubLink;
let twitterLink;
let igLink;
let websiteLink;
let contactEmailLink;

const signupNextButton = document.getElementById('signup-next-button');
const signupFinishButton = document.getElementById('signup-finish-button');
const signupFormStepOne = document.getElementById('signup-step-1');
const signupFormStepTwo = document.getElementById('signup-step-2');
signupFormStepTwo.style.display = 'none';

function submitFirstStep(e){
    console.log('first step submits');
    e.preventDefault();
    const emailInput = document.getElementById('signup-email-input');
    const passwordInput = document.getElementById('signup-password-input');
    const confirmPasswordInput = document.getElementById('signup-confirm-password-input');
    // console.log('email input working', emailInput.value);
    // console.log('password input working', passwordInput.value);
    // console.log('password confirm input working', confirmPasswordInput.value);
    // TODO: validate the inputs
    email = emailInput.value;
    password = passwordInput.value;
    confirmPassword = confirmPasswordInput.value;
    // display the next form
    signupFormStepOne.style.display = 'none';
    signupFormStepTwo.style.display = 'block'
}

function submitSecondStep(e){
    e.preventDefault();
    const nameInput = document.getElementById('signup-name-input');
    const bioInput = document.getElementById('signup-bio-input');
    const locationInput = document.getElementById('signup-location-input');
    const experienceInput = document.getElementById('signup-experience-input');
    const techInput = document.getElementById('signup-tech-input');
    const otherInput = document.getElementById('signup-other-input');
    const linkedinLinkInput = document.getElementById('signup-linkedin-input');
    const githubLinkInput = document.getElementById('signup-github-input');
    const instagramLinkInput = document.getElementById('signup-instagram-input');
    const twitterLinkInput = document.getElementById('signup-twitter-input');
    const contactEmailLinkInput = document.getElementById('signup-contact-email-input');
    const websiteLinkInput = document.getElementById('signup-website-input');

    name = nameInput.value;
    bio = bioInput.value;
    userLocation = locationInput.value;
    experience = experienceInput.value;
    tech = techInput.value;
    other = otherInput.value;
    linkedinLink = linkedinLinkInput.value;
    githubLink = githubLinkInput.value;
    twitterLink = twitterLinkInput.value;
    igLink = instagramLinkInput.value;
    websiteLink = websiteLinkInput.value;
    contactEmailLink = contactEmailLinkInput.value;

    completeSignup();
}


async function completeSignup(){
    // send a request to the server to create the new user, profile, and links

    let response = await fetch('http://localhost:3001/api/users', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
        })
    });
    const userData = await response.json();
    console.log(userData);

    // create a profile
    response = await fetch('http://localhost:3001/api/profiles', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            name: name,
            bio: bio,
            location: userLocation,
            experience: experience,
            tech: tech
        })
    });
    const profileData = await response.json();
    console.log(profileData);
    //signupFormStepTwo.display.block = 'none';
    window.location.replace('http://localhost:3001/')
}


signupNextButton.addEventListener('click', submitFirstStep);
signupFinishButton.addEventListener('click', submitSecondStep);

//step 2 signup 