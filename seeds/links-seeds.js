const { Links } = require('../models');

const linksdata = [
  {
    linkedin: 'https://www.linkedin.com/in/john-smith-686579b9/?originalSubdomain=ca',
    github: 'https://github.com/john-smith-library',
    email: 'john@email.com',
    website: 'https://johnsmith.com/',
    user_id: 1,
    profile_id: 1
  },
  {
    github: 'https://github.com/ths-rwth/carl',
    ig: 'https://www.instagram.com/carlradke/?hl=en',
    email: 'carl@email.com',
    user_id: 2,
    profile_id: 2
  },
  {
    linkedin: 'https://www.linkedin.com/in/sabrina-wolf-r-c-m-9aa86a9/?originalSubdomain=ca',
    ig: 'https://www.instagram.com/sabriiwolf/?hl=en',
    email: 'sabrina@email.com',
    user_id: 3,
    profile_id: 3
  },
  {
    linkedin: 'https://www.linkedin.com/in/tyler-cruz-b2a93187/?originalSubdomain=ca',
    github: 'https://github.com/tyzurc',
    email: 'tyler@email.com',
    user_id: 4,
    profile_id: 4
  },
  {
    linkedin: 'https://www.linkedin.com/in/alex-goodman-63b62738/?originalSubdomain=ca',
    github: 'https://github.com/wagoodman',
    twitter: 'https://twitter.com/agoodmanjazz?lang=en',
    email: 'alex@email.com',
    user_id: 5,
    profile_id: 5
  },
];

const seedLinks = () => Links.bulkCreate(linksdata);

module.exports = seedLinks;