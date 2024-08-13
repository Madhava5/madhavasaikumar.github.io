module.exports = {
  siteTitle: 'Madhava Sai Kumar',
  siteDescription:
    "Madhava Sai Kumar is a Cloud and DevOps enthusiast with a strong background in Site Reliability Engineering, based in Canada. I enjoy learning new skills and applying them to real-world projects.",
  siteLanguage: 'en_US',
  
  // googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Madhava Sai Kumar ',
  location: 'Canada',
  email: 'madhavrockzz007@gmail.com',
  github: 'https://github.com/madhava5',
  twitterHandle: '@MadhavaSaiKuma1',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/madhava5',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/madhava-sai-kumar-karnati-b28a40151/',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/yashitanamdeo',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/MadhavaSaiKumar',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/MadhavaSaiKuma1',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
