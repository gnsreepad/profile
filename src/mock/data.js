import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ganesh', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ganesh S',
  subtitle: 'Machine Learning Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Ganesh has expertise in building cloud-based machine learning and natural language processing services at early stage tech companies.',
  paragraphTwo: 'Built neural networks to analyze and categorize product images, a recommendation system to personalize shopping experiences for each user, and tools to generate insight into user behavior.',
  paragraphThree: 'Additionaly Ganesh has back end software engineering experience.',
  resume: 'https://www.linkedin.com/in/gsreepad/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'expression.jpg',
    title: 'Facial Expression Recognition',
    info: 'Here we recognize emotions using deep learning model on Kaggle data. The data consists of 48x48 pixel grayscale images of faces. The task is to categorize each face based on the emotion shown in the facial expression in to one of seven categories (0=Angry, 1=Disgust, 2=Fear, 3=Happy, 4=Sad, 5=Surprise, 6=Neutral)',
    info2: '',
    url: '',
    repo: 'https://github.com/gnsreepad/Facial-Expression-Recognition', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'masters_apply.png',
    title: 'Masters Apply',
    info: 'Non-profit organisation to help students prepare for graduate education possibilities in USA',
    info2: '',
    url: 'https://mastersapply.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'scissors.jpg',
    title: 'Rock Paper Scissors',
    info: 'This program identifies camera image as rock, paper, scissor. Developed a tensorflow model to perform classification, converted the model to Tensorflow Lite to increase performace by 60% in mobile devices',
    info2: '',
    url: '',
    repo: 'https://github.com/gnsreepad/rock-paper-scissor', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'gnsreepad@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/gsreepad/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/gnsreepad/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false,
};
