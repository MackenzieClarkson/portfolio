const projects =  [
  {
    title: 'Rust Powered Gaming Aggregate',
    desc: `Hobby project using rust to compile and store data from various sources for analysis regarding World of Warcraft PvP. `,
    featuredImage: '/portfolio/static/stack/rust-tutorial.png',
    author: 'Mackenzie Clarkson',
    createdAt: '03/03/2024',
    link: 'https://rating-inflation.io'
  },
  {
    title: 'Portfolio Website',
    desc: `You're on it! A modern SPA built with Vue and Vuetify. `,
    featuredImage: '/portfolio/static/stack/vue.jpeg',
    author: 'Mackenzie Clarkson',
    createdAt: '02/03/2019',
    link: '#/site'
  },
  {
    title: 'Space Tracker',
    desc: `Space Object tracker and astronomy images/logs from NASA API. Made with React, bootstrap and NASA's public API.
    Automated API calls retrieve up-to-date images and asteroids currently in proximity.`,
    featuredImage: '/portfolio/static/stack/nasa.png',
    author: 'Mackenzie Clarkson',
    createdAt: '03/03/2019',
    link: 'https://mackenzieclarkson.github.io/spaceTracker'
  },
  {
    title: 'Computer Vision Application',
    desc: `Primary feature of my CV App is for object motion localization for application in security.
    The app encases objects in boxes using floodfill algorithms to assure each single object is in one box.
    This app was a challenge in optmization as it is key to be able to run on top of a live video feed input.
    If the algorithm is too slow it would not be able to catch up to the frames a live feed provides. Two versions were made:
    one using open source libraries such as OPENCV and one without help (other than numpy).`,
    featuredImage: '/portfolio/static/stack/motion.gif',
    author: 'Mackenzie Clarkson',
    createdAt: '04/01/2017',
    link: 'https://github.com/MackenzieClarkson/Motion-Detection--No-OpenCV-'
  },
  {
    title: 'TaskFlow',
    desc: `Several Apps in one, TaskFlow is a workflow library I work on for IBM. Used by hundreds of users internally, it automates many tasks including clocking in,
    relevant data updates, posting and realtime updating of tasks for team collaboration. Also used by management for metrics like Inventory, shipping status, cancellations
    costs, and project management e.x resource allocation by project or client. My contribution was to rebuild this App from the ground up using a contemporary stack (From PHP based to Node/Vue/GraphQL)
    while also implementing the new design standards and the new CSS and HTML template from IBM. This App is internal and therefore private :(`,
    featuredImage: '/portfolio/static/stack/ibm.png',
    author: 'CSCI Team @ IBM'
  },

];

const getProjects = (limit) => {
  return (limit) ? projects.slice(0, limit) : projects;
};

export {
  getProjects
};
