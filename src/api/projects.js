const projects =  [
  {
    title: 'Portfolio Website',
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text of the printing and typesetting industry scrambled a type specimen book text of the dummy text of the printing printing and typesetting industry scrambled dummy text of the printing.`,
    featuredImage: '/static/discover_word/thumb/ds_1.jpg',
    author: 'Mackenzie Clarkson',
    createdAt: '02/03/2019',
    link: '/aboutSite'
  },
  {
    title: 'Computer Vision Application',
    desc: `Primary feature of my CV App is for object motion localization for application in security.
    The app encases objects in boxes using floodfill algorithms to assure each single object is in one box.
    This app was a challenge in optmization as it is key to be able to run on top of a live video feed input.
    If the algorithm is too slow it would not be able to catch up to the frames a live feed provides. Two versions were made:
    one using open source libraries such as OPENCV and one without help (other than numpy).`,
    featuredImage: '/static/discover_word/thumb/ds_2.jpg',
    author: 'Mackenzie Clarkson',
    createdAt: '04/01/2017'
  },
  {
    title: 'A sample post with image',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text of the printing and typesetting industry scrambled a type specimen book text of the dummy text of the printing printing and typesetting industry scrambled dummy text of the printing.',
    featuredImage: '/static/discover_word/thumb/ds_3.jpg',
    author: 'Jim Wang',
    createdAt: new Date().toLocaleDateString()
  },

];

const getProjects = (limit) => {
  return (limit) ? projects.slice(0, limit) : projects;
};

export {
  getProjects
};
