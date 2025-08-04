const header = {
  // homepage: 'https://pooja735.github.io/portfolio', // optional
  // title: 'PV.', // optional
}

const about = {
  name: 'Pooja Valleti',
  role: 'AI & ML Engineer |  Python Developer| MERN Stack Developer',
  description:
    'AI and Full Stack Developer passionate about solving real-world problems using technology. Experienced in building intelligent applications, virtual interfaces, and scalable web platforms. Enthusiastic about learning and applying ML and system design.',
  resume: 'https://drive.google.com/file/d/16j9tucJlzYRAp4IM5tqwFXAHZB-qODFl/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/valleti-pooja-545a36242/',
    github: 'https://github.com/pooja735',
  },
}

const projects = [
  {
    name: 'TechStore E-commerce Website',
    description:
      'Full-stack MERN-based e-commerce platform with secure authentication, product catalog, cart, order tracking, and OpenAI-powered chatbot for instant support on shipping, payments, and more.',
    stack: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'JavaScript'],
    sourceCode: 'https://github.com/pooja735/full-stack-e-commerce-with-chatbot.git',
    livePreview: '', // optional
  },
  {
    name: 'Gesture-Controlled Virtual Mouse',
    description:
      'Contactless mouse interface using MediaPipe and Pybind11 for real-time gesture-based control like cursor movement, click, scroll, and drag-and-drop.',
    stack: ['MediaPipe', 'OpenCV', 'Pybind11', 'TensorFlow'],
    sourceCode: 'https://github.com/pooja735/Hand-Gesture-Control.git',
    livePreview: '', // optional
  },
  {
    name: 'MedMaster',
    description:
      'Personalized Medical Recommendation System using ML and Flask. Provides disease prediction and health tips while ensuring user privacy and security.',
    stack: ['Python', 'Machine Learning', 'Flask'],
    sourceCode: 'https://github.com/pooja735/MedMaster.git',
    livePreview: '', // optional
  },
]

const skills = [
  'Python',
  'C',
  'Java',
  'C++',
  'HTML',
  'CSS',
  'SQL',
  'JavaScript',
  'React',
  'Node.js',
  'MongoDB',
  'Express.js',
  'MySQL',
  'Oracle DB',
  'Pandas',
  'Matplotlib',
  'Mediapipe',
  'Scikit-learn',
  'GitHub',
  'Microsoft Excel',
]

const contact = {
  email: 'poojavalleti04@gmail.com',
}

const experience = [
  {
    title: 'AI Intern (Full-Time)',
    company: 'Cloudchip Technologies',
    period: 'Feb 2025 - June 2025',
    description:
      'Built a full-stack e-commerce application using MERN stack, achieving 95% faster page load and a 30% rise in engagement. Designed modern UI with Tailwind CSS and Bootstrap. Integrated an OpenAI-powered chatbot, reducing support queries by 40%.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'OpenAI API', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'AI Intern',
    company: 'Cloudchip Technologies',
    period: 'June 2024 - Sept 2024',
    description:
      'Developed a gesture-controlled virtual mouse using MediaPipe and Pybind11. Achieved over 90% gesture accuracy and real-time response under 100ms. Enhanced usability for accessibility and contactless systems.',
    technologies: ['MediaPipe', 'Pybind11', 'OpenCV', 'TensorFlow'],
  },
]

const education = [
  {
    degree: 'B.Tech in Computer & Communication Engineering',
    institution: 'Manipal University Jaipur',
    period: '2021 - 2025',
    gpa: '7.5 CGPA',
    description: 'Completed Bachelor’s degree in Computer & Communication Engineering with a specialization in Cyber Security, and a strong focus on AI, ML, and full-stack development.',
  },
  {
    degree: 'Intermediate - MPC',
    institution: 'Sri Chaitanya Junior Kalasala, Hyderabad',
    period: '2019 - 2021',
    gpa: '71%',
    description: 'Completed higher secondary education with core focus on Mathematics, Physics, and Chemistry.',
  },
  {
    degree: 'CBSE 10th',
    institution: 'Sri Chaitanya School, Hyderabad',
    period: '2018 - 2019',
    gpa: '87%',
    description: 'Completed 10th standard with CBSE curriculum.',
  },
]

export { header, about, projects, skills, contact, experience, education }
