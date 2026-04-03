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
    imageUrl: 'https://media.licdn.com/dms/image/v2/D562DAQG63DLhIn_AxA/profile-treasury-image-shrink_800_800/B56ZrpFFrlMIAc-/0/1764847020790?e=1775858400&v=beta&t=zHqe4uuKfKRu8PwA5I1SMilcbg15jGoFQMCzBWRG408',
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
    imageUrl: 'https://media.licdn.com/dms/image/v2/D562DAQH21xpooIVzdQ/profile-treasury-image-shrink_800_800/B56ZrpKmqYLYAY-/0/1764848464133?e=1775858400&v=beta&t=bO-BNjG-35MGY0RCINT1Kwu-Qk0f7_0JCqY-DmVMtvo',
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
    imageUrl: 'https://media.licdn.com/dms/image/v2/D562DAQG0873Txyv1CQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738572852659?e=1775858400&v=beta&t=Ia23l3flbK_i_v1cgbhwrBZfSkHVcxQ8_eLKDnkyKA4',
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
    imageUrl: 'https://media.licdn.com/dms/image/v2/D562DAQEqZpoVRCS5BQ/profile-treasury-document-cover-images_1280/profile-treasury-document-cover-images_1280/0/1719170250218?e=1775862000&v=beta&t=fjHxZQOEVAVxFV4J2WZmjZT1vsADu7yaGNVt1NbKshs',
    imageOrientation: 'horizontal',
    link: {
      label: 'View Credential',
      url: 'https://bohubrihi.com/certificate/66787365726937986928c5f6'
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
    imageUrl: 'https://media.licdn.com/dms/image/v2/D562DAQHN7AaDz5NIVg/profile-treasury-document-cover-images_1280/profile-treasury-document-cover-images_1280/0/1714921100755?e=1775862000&v=beta&t=TDhgggoCotGq0lKR5YQX17EeNhODgOp2qPAgr2ltjzs',
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
    imageUrl: 'https://media.licdn.com/dms/image/v2/D562DAQFIU4E5R7-iVg/profile-treasury-document-images_1280/profile-treasury-document-images_1280/1/1714642961416?e=1776297600&v=beta&t=vG49k6ptJ47KMvpe9YO_CNo95zqBtVq7wcaJMLJlS0Q',
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
    imageUrl: 'https://media.licdn.com/dms/image/v2/D562DAQEta8ptEB6MIw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1714244009094?e=1775862000&v=beta&t=7BlUkLApUmh7d9iYleuHPZb0GfKGmu1dLrAFCtLW1IE',
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
    imageUrl: 'https://media.licdn.com/dms/image/v2/D562DAQFHiljzoiXT2g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1703960324178?e=1775862000&v=beta&t=cr0mbvabI0yUoFA870kZgiXwkB-aor3kvOALo0XksLM',
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
    imageUrl: 'https://media.licdn.com/dms/image/v2/D562DAQHEeiSKp1vJpA/profile-treasury-image-shrink_800_800/B56Z1VZM1LKEAc-/0/1775254166764?e=1775862000&v=beta&t=f2Wpnh4aNWHcYeyuR8s06t8si9xsFgCuhLlo29Xb_5o',
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