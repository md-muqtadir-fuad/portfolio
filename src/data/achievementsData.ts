export interface Achievement {
  id: string;
  year: string;
  month: string;
  title: string;
  issuer: string;
  description: string;
  place: string;
  tags: string[];
  category: string;
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
    category: 'Internship & Professional Experience',
    imageUrl: 'https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/intern.jpg?raw=true',
    imageOrientation: 'vertical'
  },
  {
    id: '2',
    year: '2025',
    month: 'Nov',
    title: 'Certificate of Appreciation',
    issuer: 'Chittagong University of Engineering & Technology (CUET)',
    description: 'Recognized for participation and achievement in a hackathon focused on Automatic Speech Recognition and Large Language Models.',
    place: 'Chittagong, Bangladesh',
    tags: ['Hackathon', 'NLP', 'LLM', 'Artificial Intelligence'],
    category: 'Competitions & Hackathons',
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
    category: 'Research & Conferences',
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
    category: 'Programming, AI & Data Science',
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
    category: 'Programming, AI & Data Science',
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
    category: 'Programming, AI & Data Science',
    imageUrl: 'https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/p-basics-2.jpg?raw=true',
    imageOrientation: 'horizontal',
    link: {
      label: 'View Credential',
      url: 'https://www.coursera.org/account/accomplishments/verify/NRJPDGGLA9SU'
    }
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
    category: 'Programming, AI & Data Science',
    imageUrl: 'https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/herwill-nlp.jpg?raw=true',
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
    category: 'Programming, AI & Data Science',
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
    category: 'Certifications & Professional Development',
    imageUrl: 'https://picsum.photos/seed/postal/800/600',
    imageOrientation: 'horizontal'
  },
  {
  id: '12',
  year: '2025',
  month: 'Dec',
  title: 'Certificate of Attendance',
  issuer: 'IEOM Society International',
  description: 'Attended the 8th IEOM Bangladesh International Conference on Industrial Engineering and Operations Management hosted by World University of Bangladesh.',
  place: 'Dhaka, Bangladesh',
  tags: ['Conference', 'IEOM', 'Industrial Engineering'],
  category: 'Research & Conferences',
  imageUrl: 'https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/attendence-25.jpg?raw=true',
  imageOrientation: 'vertical'
},
{
  id: '13',
  year: '2026',
  month: 'May',
  title: 'Certificate of Reviewer',
  issuer: 'IEOM Society International',
  description: 'Recognized for serving as a reviewer for technical papers and providing expert feedback at the 7th African IEOM Conference.',
  place: 'Cape Town, South Africa',
  tags: ['Reviewer', 'Academic Service', 'IEOM'],
  category: 'Research & Conferences',
  imageUrl: 'https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/review-africa-26.jpg?raw=true',
  imageOrientation: 'vertical'
},
{
  id: '14',
  year: '2025',
  month: 'Dec',
  title: 'Wiki Loves Children 2025',
  issuer: 'Bangla WikiConnect',
  description: 'Received a recognition certificate for participating in Wiki Loves Children 2025, a Bengali Wikipedia content campaign focused on child-related topics.',
  place: 'Online',
  tags: ['Wikipedia', 'Community Contribution', 'Content Writing'],
  category: 'Competitions & Hackathons',
  imageUrl: 'https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/wiki-child-25.jpg?raw=true',
  imageOrientation: 'horizontal'
},
{
  id: '15',
  year: '2025',
  month: 'Feb',
  title: 'Amar Ekushey Editathon 2025',
  issuer: 'Wikimedia Bangladesh',
  description: 'Received a certificate for contributing to Amar Ekushey Article Contest 2025, a Bangla Wikipedia article writing and translation competition.',
  place: 'Online',
  tags: ['Wikipedia', 'Article Writing', 'Translation'],
  category: 'Competitions & Hackathons',
  imageUrl: 'https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/ekushey-25.jpg?raw=true',
  imageOrientation: 'horizontal'
},
{
  id: '16',
  year: '2025',
  month: 'Jan',
  title: 'Certificate of Appreciation',
  issuer: 'Titumir Hall, BUET',
  description: 'Awarded in recognition of the successful management of the dining mess during the first month of the January 2025 term.',
  place: 'Dhaka, Bangladesh',
  tags: ['Leadership', 'Operations', 'Service'],
  category: 'Certifications & Professional Development',
  imageUrl: 'https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/titumir-25.jpg?raw=true',
  imageOrientation: 'horizontal'
},
{
  "id": "17",
  "year": "2025",
  "month": "Dec",
  "title": "Certificate of Presentation",
  "issuer": "IEOM Society International",
  "description": "Delivered an oral presentation at the 8th IEOM Bangladesh International Conference on Industrial Engineering and Operations Management on stochastic modeling of throughput-quality dynamics in labor-intensive manufacturing, focusing on operator fatigue and process instability.",
  "place": "Dhaka, Bangladesh",
  "tags": ["Conference", "Presentation", "IEOM", "Manufacturing Systems"],
  "category": "Research & Conferences",
  "imageUrl": "https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/ieom-25-pp.jpg?raw=true",
  "imageOrientation": "vertical",
  "link": {
    "label": "View Certificate",
    "url": "https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/ieom-25-pp.jpg?raw=true"
  }
}
];