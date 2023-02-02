const { Profile } = require('../models');

const profiledata = [
  {
    picture: null,
    name: 'John Smith',
    bio: 'Hello everyone, my name is John. I am a web/software developer with 3 years of experience, looking for other coders who would like to work together.',
    location: 'Toronto, Canada',
    experience: '3 years',
    tech: 'HTML, CSS, JavaScript, SQL, Python and other languages',
    other: 'Gaming, watching movies and snowboarding',
    user_id: 1
  },
  {
    picture: null,
    name: 'Carl Warren',
    bio: 'Hi, my name is Carl. I am a newbie coder looking to connect and get mentorship.',
    location: 'Vancouver, Canada',
    experience: '1 year',
    tech: 'HTML and CSS',
    other: 'Photography and hiking',
    user_id: 2
  },
  {
    picture: null,
    name: 'Sabrina Wolf',
    bio: 'Hey fellow coders! I am Sabrina and I am a full stack developer with 10 years under my belt. Available to have coffee chats and talk nerd.',
    location: 'San Francisco, US',
    experience: '10 years',
    tech: 'HTML, CSS, JavaScript, Ruby, Python and SQL',
    other: 'Cosplaying and gaming',
    user_id: 3
  },
  {
    picture: null,
    name: 'Tyler Cruz',
    bio: 'Hi there, I am Tyler. I am a software engineer with 2 years of experience. I am self taught and would like to connect with fellow coders out there!',
    location: 'Halifax, Canada',
    experience: '2 years',
    tech: 'JavaScript, HTML, CSS, PHP, and ReactJS',
    other: 'Basketball, baseball and soccer',
    user_id: 4
  },
  {
    picture: null,
    name: 'Alex Goodman',
    bio: 'Hey there, I am Alex. I am working as an engineering manager for a saas company. I have 6 years experience and I am looking to chat and connect with some people looking to work on a project together.',
    location: 'Toronto, Canada',
    experience: '3 years',
    tech: 'HTML, CSS, JavaScript',
    other: 'Hockey, fishing and skiing',
    user_id: 5
  },
];

const seedProfile = () => Profile.bulkCreate(profiledata);

module.exports = seedProfile;