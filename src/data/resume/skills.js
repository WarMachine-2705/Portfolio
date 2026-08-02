const skills = [
  {
    title: 'Javascript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript', 'Frontend'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering', 'Backend'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Web Development', 'Javascript', 'Backend'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript', 'Frontend'],
  },
  {
    title: 'Next.js',
    competency: 4,
    category: ['Web Development', 'Javascript', 'Frontend'],
  },
  {
    title: 'Three.js',
    competency: 4,
    category: ['Web Development', 'Frontend'],
  },
  {
    title: 'Tailwind',
    competency: 4,
    category: ['Web Development', 'Frontend'],
  },
  {
    title: 'Bootstrap',
    competency: 4,
    category: ['Web Development', 'Frontend'],
  },
  {
    title: 'Flutter',
    competency: 3,
    category: ['Mobile Development', 'Frontend', 'Languages'],
  },
  {
    title: 'Dart',
    competency: 3,
    category: ['Languages', 'Mobile Development'],
  },
  {
    title: 'Redux-Saga',
    competency: 3,
    category: ['Web Development', 'Frontend'],
  },
  {
    title: 'HTML + CSS',
    competency: 5,
    category: ['Web Development', 'Languages', 'Frontend'],
  },
  {
    title: 'Express.js',
    competency: 4,
    category: ['Web Development', 'Backend', 'Javascript'],
  },
  {
    title: 'Django',
    competency: 4,
    category: ['Web Development', 'Backend', 'Python'],
  },
  {
    title: 'FastAPI',
    competency: 4,
    category: ['Web Development', 'Backend', 'Python'],
  },
  {
    title: 'Laravel',
    competency: 3,
    category: ['Web Development', 'Backend'],
  },
  {
    title: 'PHP',
    competency: 3,
    category: ['Languages', 'Web Development', 'Backend'],
  },
  {
    title: 'REST APIs',
    competency: 5,
    category: ['Web Development', 'Backend'],
  },
  {
    title: 'Socket.IO / WebSockets',
    competency: 4,
    category: ['Web Development', 'Backend'],
  },
  {
    title: 'Firebase',
    competency: 4,
    category: ['Web Development', 'Backend', 'Cloud & DevOps'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Databases', 'DBMS', 'Web Development'],
  },
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Databases', 'DBMS'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Databases', 'DBMS'],
  },
  {
    title: 'Weaviate',
    competency: 4,
    category: ['Databases', 'DBMS', 'ML Engineering'],
  },
  {
    title: 'Redis',
    competency: 4,
    category: ['Databases', 'DBMS', 'Backend'],
  },
  {
    title: 'SQLite3/SQL',
    competency: 3,
    category: ['Databases', 'Languages', 'DBMS'],
  },
  {
    title: 'TensorFlow',
    competency: 4,
    category: ['ML Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'LiteLLM',
    competency: 5,
    category: ['ML Engineering', 'AI & RAG', 'Python'],
  },
  {
    title: 'LLM Tool / Function Calling',
    competency: 5,
    category: ['ML Engineering', 'AI & RAG'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Science', 'ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-learn',
    competency: 4,
    category: ['ML Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'AWS (EC2, S3, ECS, RDS)',
    competency: 4,
    category: ['Cloud & DevOps', 'Tools'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Cloud & DevOps', 'Tools'],
  },
  {
    title: 'GitLab CI/CD',
    competency: 4,
    category: ['Cloud & DevOps', 'Tools'],
  },
  {
    title: 'Kafka',
    competency: 3,
    category: ['Cloud & DevOps', 'Backend'],
  },
  {
    title: 'Keycloak',
    competency: 3,
    category: ['Cloud & DevOps', 'Backend'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools', 'Version Control'],
  },
  {
    title: 'GitHub',
    competency: 4,
    category: ['Tools', 'Version Control'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'JAVA',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// List of colors for category pills
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
  '#e5a93c',
  '#4ca1a3',
  '#9b59b6',
  '#1abc9c',
  '#f39c12',
  '#d35400',
  '#2c3e50',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index % colors.length],
}));

export { categories, skills };
