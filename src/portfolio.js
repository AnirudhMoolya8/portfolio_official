const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'AM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Anirudh Moolya',
  role: 'Full-Stack Developer',
  description:
    'Proficient software developer with specialization in full-stack web development. A problem solver and strong communicator with a focus on developing scalable and well-documented code. My passion is to combine the worlds of aerospace and software development to create exciting and efficient projects.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/anirudhmoolya/',
    github: 'https://github.com/AnirudhMoolya8',
  },
}

const projects = [
  {
    name: 'OpenAI GPT-3',
    description:
      "A simple static site built fully on React about OpenAI's GPT-3 Technology. Site used a figma reference as a guide.",
    stack: ['React', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/AnirudhMoolya8/react-AI-app',
    livePreview: 'https://react-ai-app.onrender.com/',
  },
  {
    name: 'StoryBooks App',
    description:
      'StoryBooks is a full-stack blogging application where users can upload, delete, and update personal blogs.',
    stack: ['MongoDB', 'Express', 'React', 'Node'],
    sourceCode: 'https://github.com/AnirudhMoolya8/StoryBooks-App',
    livePreview: 'https://storybooksanirudh.onrender.com/',
  },
  {
    name: 'Task Tracker',
    description:
      'A application that can be used for daily tracking of your everyday tasks. Built on React.',
    stack: ['React', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/AnirudhMoolya8/React_Tracker',
    livePreview: 'https://react-tracker-anirudh.onrender.com/',
  },
]

const skills = [

  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Express',
  'Node',
  'Next',
  'MongoDB',
  'AWS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
