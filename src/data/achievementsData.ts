export interface Achievement {
  id: string;
  year: string;
  month: string;
  title: string;
  issuer: string;
  description: string;
  place: string;
  tags: string[];
  imageUrl: string;
  imageOrientation: 'horizontal' | 'vertical';
  link?: {
    label: string;
    url: string;
  };
}

export const achievementsData: Achievement[] = [
  {
    id: '1',
    year: '2025',
    month: 'Dec',
    title: 'Internship Completion Certificate',
    issuer: 'PRAN-RFL Group',
    description: 'Completed a professional internship focusing on industrial operations, quality control protocols, and supply chain management systems.',
    place: 'Bangladesh',
    tags: ['Quality Control', 'Supply Chain Management', 'Industrial Engineering'],
    imageUrl: 'https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/intern.jpg?raw=true',
    imageOrientation: 'vertical'
  },
  {
    id: '2',
    year: '2025',
    month: 'Nov',
    title: 'Certificate of Appreciation',
    issuer: 'Chittagong University of Engineering & Technology (CUET)',
    description: 'Recognized for demonstrated proficiency and contributions in the fields of Natural Language Processing and Large Language Models.',
    place: 'Chittagong, Bangladesh',
    tags: ['NLP', 'LLM', 'Artificial Intelligence'],
    imageUrl: 'https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/asr-25.jpg?raw=true',
    imageOrientation: 'horizontal'
  },
  {
    id: '3',
    year: '2024',
    month: 'Dec',
    title: 'Certificate of Presentation',
    issuer: 'IEOM Society International',
    description: 'Awarded for delivering an oral presentation on "Aerodynamic Performance Analysis of NACA 4415 Airfoil Incorporating Gurney and Bionic Flap" at the 7th Bangladeshi International Conference on IEOM.',
    place: 'Dhaka, Bangladesh',
    tags: ['Aerodynamics', 'CFD', 'Numerical Analysis'],
    imageUrl: 'https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/ieom-24-pp.jpg?raw=true',
    imageOrientation: 'vertical'
  },
  {
    id: '4',
    year: '2024',
    month: 'Jun',
    title: 'Introduction to R',
    issuer: 'Bohubrihi',
    description: 'Mastered R programming including RShiny web development, data manipulation with dplyr, and advanced visualization with ggplot2.',
    place: 'Online',
    tags: ['R', 'Data Science', 'RShiny', 'Data Visualization'],
    imageUrl: 'https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/r-bohubrihi.png?raw=true',
    imageOrientation: 'horizontal',
    link: {
      label: 'View Credential',
      url: 'https://res.cloudinary.com/bohubrihi/image/upload/v1719169976/production/667873b5726937986928c5f6.pdf'
    }
  },
  {
    id: '5',
    year: '2024',
    month: 'May',
    title: 'Python for Everybody Specialization',
    issuer: 'University of Michigan | Coursera',
    description: 'A comprehensive 5-course series covering data structures, web scraping, database management with SQLite, and data visualization using Python.',
    place: 'Coursera',
    tags: ['Python', 'SQL', 'Web Scraping', 'Data Structures'],
    imageUrl: 'https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/p-five.jpg?raw=true',
    imageOrientation: 'horizontal',
    link: {
      label: 'View Credential',
      url: 'https://www.coursera.org/account/accomplishments/specialization/QVR5GBJFJ6CN'
    }
  },
  {
    id: '6',
    year: '2024',
    month: 'May',
    title: 'Python Programming: A Concise Introduction',
    issuer: 'Wesleyan University',
    description: 'Focused on Python fundamentals including conditional statements, loops, list manipulation, and building small-scale database applications.',
    place: 'Coursera',
    tags: ['Python', 'Programming Fundamentals'],
    imageUrl: 'https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/p-basics-2.jpg?raw=true',
    imageOrientation: 'horizontal',
    link: {
      label: 'View Credential',
      url: 'https://www.coursera.org/account/accomplishments/verify/NRJPDGGLA9SU'
    }
  },
  {
    id: '7',
    year: '2024',
    month: 'Apr',
    title: "Seminar on Students' Engagement to Combat Cyber Crime",
    issuer: 'Bangladesh Police',
    description: 'Participated in a strategic seminar focused on cyber law awareness and the role of students in preventing digital crimes.',
    place: 'Bangladesh',
    tags: ['Cybersecurity', 'Cyberlaw'],
    imageUrl: 'https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/cyber.jpg?raw=true',
    imageOrientation: 'vertical'
  },
  {
    id: '8',
    year: '2023',
    month: 'Dec',
    title: "HerWILL's The Data Forge",
    issuer: 'HerWILL - Women Inspired in Life and Leadership',
    description: 'Completed intensive training in Machine Learning and Natural Language Processing (NLP) workflows.',
    place: 'Online',
    tags: ['Machine Learning', 'NLP', 'Data Science'],
    imageUrl: 'https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/hewill-nlp.jpg?raw=true',
    imageOrientation: 'horizontal'
  },
  {
    id: '9',
    year: '2022',
    month: 'Feb',
    title: 'Python Basics',
    issuer: 'University of Michigan | Coursera',
    description: 'Foundational certification covering the core syntax and logic of the Python programming language.',
    place: 'Coursera',
    tags: ['Python', 'Coding Basics'],
    imageUrl: 'https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/p-basics.jpg?raw=true',
    imageOrientation: 'horizontal',
    link: {
      label: 'View Credential',
      url: 'https://www.coursera.org/account/accomplishments/verify/DR8YHAECTWP6'
    }
  },
  {
    id: '10',
    year: '2018',
    month: 'Jul',
    title: 'Diploma in Software Application Course',
    issuer: 'Postal Academy, Rajshahi',
    description: 'Six-month diploma covering Adobe Photoshop, Microsoft Office Suite, and general software applications.',
    place: 'Rajshahi, Bangladesh',
    tags: ['Graphic Design', 'Office Productivity', 'Photoshop'],
    imageUrl: 'https://picsum.photos/seed/postal/800/600',
    imageOrientation: 'horizontal'
  },
  {
    id: '11',
    year: '2017',
    month: 'May',
    title: 'Computer Literacy Program',
    issuer: 'Dnet',
    description: 'Certification in essential computer operations and Microsoft Office proficiency.',
    place: 'Bangladesh',
    tags: ['Computer Literacy', 'MS Office'],
    imageUrl: 'https://picsum.photos/seed/dnet/800/600',
    imageOrientation: 'horizontal'
  }
];