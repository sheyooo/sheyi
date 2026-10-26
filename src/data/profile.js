// Work history: LinkedIn profile, read in Chrome on 26 October 2026.
// Project descriptions and technologies: the original portfolio repository.
export const profile = {
  name: 'Seyi Adekoya',
  role: 'Software Engineer',
  location: 'Berlin, Germany',
  email: 'sheyiadekoya@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sheyiadekoya/',
  github: 'https://github.com/sheyooo',
  summary: 'Software engineer with experience across healthcare, housing, and mental wellbeing. I work across the stack, with a background in JavaScript, product development, and mentoring developers.',
};

export const experience = [
  { id: 'redcare', company: 'Redcare Pharmacy', role: 'Software Engineer', dates: 'Oct 2021 — Present', location: 'Berlin, Germany', current: true, initial: 'R', color: 'coral', description: 'Software engineering in the healthcare sector.', tags: ['Healthcare', 'Software engineering'] },
  { id: 'doctolib', company: 'Doctolib', role: 'Full Stack Developer', dates: 'Jun 2020 — Oct 2021', location: 'Berlin, Germany', initial: 'D', color: 'blue', description: 'Full stack development at Doctolib.', tags: ['Healthcare', 'Full stack development'] },
  { id: 'wunderflats', company: 'Wunderflats', role: 'Senior Fullstack Engineer', dates: 'Mar 2019 — May 2020', location: 'Berlin, Germany', initial: 'W', color: 'purple', description: 'Worked on a furnished housing platform connecting people with their next home.', tags: ['React', 'Node.js', 'GraphQL', 'Google Cloud'] },
  { id: 'mindright', company: 'MindRight Health', role: 'Full Stack Engineer & Lead Developer', dates: 'Jan 2017 — Feb 2019', location: 'Washington, D.C., USA', initial: 'M', color: 'orange', description: 'Led development of a text-based mental health coaching product serving young people and schools in the United States.', tags: ['JavaScript', 'React', 'Node.js', 'Twilio'] },
  { id: 'andela', company: 'Andela', role: 'Full Stack Engineer', dates: 'Apr 2016 — Feb 2019', location: 'United States', initial: 'A', color: 'green', description: 'Built applications including a Yelp-style platform and a document management system using the PEAN and MERN stacks.', tags: ['JavaScript', 'PostgreSQL', 'MongoDB', 'React'] },
];

export const additionalExperience = [
  { id: 'codementor', company: 'Codementor', role: 'JavaScript Mentor', dates: 'Nov 2016 — Mar 2020', location: 'Nigeria', description: 'Mentored developers in JavaScript in my spare time.' },
  { id: 'testify', company: 'Testify', role: 'Full Stack Engineer & Co-Founder', dates: 'Sep 2015 — Feb 2016', location: 'Nigeria', description: 'Co-founded a Christian social network for sharing testimonies and connecting with others.' },
];

export const projects = [
  { id: 'wunderflats', name: 'Wunderflats', category: 'Product engineering', label: 'HOUSING & RELOCATION', title: 'Helping people find their next home.', description: 'A furnished apartment marketplace connecting tenants and landlords.', contribution: 'As a Senior Fullstack Engineer, I worked across the platform using React, Node.js, GraphQL, and cloud technologies.', role: 'Senior Fullstack Engineer', dates: '2019 — 2020', tags: ['React', 'Node.js', 'GraphQL', 'MongoDB'], color: 'lilac', icon: 'home', url: 'https://wunderflats.com', visual: ['People', 'Places', 'Possibilities'] },
  { id: 'mindright', name: 'MindRight Health', category: 'Product engineering', label: 'MENTAL HEALTH & WELLBEING', title: 'Human connection, one message at a time.', description: 'Personalized mental health coaching, delivered over text to young people.', contribution: 'As Lead Developer, I contributed to the product serving schools and thousands of teens in the United States, working with JavaScript, Node.js, React, and messaging technologies.', role: 'Full Stack Engineer & Lead Developer', dates: '2017 — 2019', tags: ['JavaScript', 'Node.js', 'Twilio', 'React'], color: 'peach', icon: 'message', url: 'https://getmindright.org', visual: ['Listen', 'Connect', 'Support'] },
  { id: 'gradeaccess', name: 'GradeAccess', category: 'Founded', label: 'EDUCATION & FAMILY', title: 'Bringing parents closer to the classroom.', description: 'An education service that helped parents follow their children’s academic performance.', contribution: 'Founded and developed a service that gathered information from teachers to help parents stay informed about their children’s progress.', role: 'Full Stack Developer & Founder', dates: '2014 — 2015', tags: ['PHP', 'MySQL', 'JavaScript', 'AWS'], color: 'sage', icon: 'book', visual: ['Teachers', 'Progress', 'Parents'] },
  { id: 'testify', name: 'Testify', category: 'Founded', label: 'COMMUNITY & CONNECTION', title: 'A space for stories that bring people together.', description: 'A Christian social network built around sharing testimonies and connecting through them.', contribution: 'Co-founded and developed the platform, using Laravel, Angular, Ionic, and real-time messaging technologies.', role: 'Full Stack Engineer & Co-Founder', dates: '2015 — 2016', tags: ['Laravel', 'Angular', 'Ionic', 'Socket.IO'], color: 'sand', icon: 'people', visual: ['Stories', 'Community', 'Connection'] },
];

// Every workplace can be opened in selected-work/, even without a full case study.
const workplacePresentation = {
  redcare: { label: 'HEALTHCARE', icon: 'health', url: 'https://www.redcare-pharmacy.com' },
  doctolib: { label: 'HEALTHCARE', icon: 'health', url: 'https://www.doctolib.com' },
  andela: { label: 'SOFTWARE DEVELOPMENT', icon: 'code', url: 'https://andela.com' },
  codementor: { label: 'DEVELOPER MENTORING', icon: 'people' },
};

export const selectedWork = [
  ...[...experience, ...additionalExperience].map(job => {
    const project = projects.find(item => item.id === job.id);
    return {
      ...workplacePresentation[job.id],
      ...project,
      id: job.id,
      name: job.company,
      role: job.role,
      dates: job.dates,
      location: job.location,
      description: project?.description || job.description,
      tags: project?.tags || job.tags || ['JavaScript'],
    };
  }),
  projects.find(project => project.id === 'gradeaccess'),
];

export const skills = [
  { title: 'Frontend', description: 'Interfaces people can use.', items: ['JavaScript', 'React', 'Redux', 'Angular', 'HTML & CSS'] },
  { title: 'Backend', description: 'The systems behind the experience.', items: ['Node.js', 'Express', 'GraphQL', 'PHP & Laravel', 'Ruby & Sinatra'] },
  { title: 'Data & infrastructure', description: 'From data models to deployment.', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Google Cloud', 'AWS', 'Docker', 'Kubernetes'] },
  { title: 'Quality & collaboration', description: 'Building well, together.', items: ['Jest', 'Mocha', 'Chai', 'Webpack', 'Developer mentoring'] },
];

export const education = { school: 'Ambrose Alli University', dates: '2012 — 2016' };
export const certification = { name: 'Golden Award — Vanadium 2016', issuer: 'Codility', date: 'January 2017' };
