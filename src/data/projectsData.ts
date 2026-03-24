export const projectsData = [
  {
    id: 1,
    slug: 'egov-lens',
    title: 'eGov-Lens',
    category: 'Machine Learning / NLP',
    shortDescription: 'Multi-dimensional ML approach for aspect-based public feedback analysis on Bengali e-Gov platforms.',
    imageUrl: 'https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/text_feature_log.png?raw=true',
    overview: 'This project focuses on analyzing public feedback on e-government platforms in Bangladesh using advanced NLP techniques. We developed a multi-dimensional ML model to categorize feedback into various aspects and sentiments, providing actionable insights for policy makers.',
    detailedDescription: 'This paper introduces "eGov-Lens," a comprehensive multi-dimensional machine learning framework designed for Aspect-Based Sentiment Analysis (ABSA) of Bengali public feedback on e-government platforms. Motivated by the rapid digitalization of government services in Bangladesh and the subsequent surge in unstructured citizen feedback on social media, the authors address a critical gap: the lack of tools that provide nuanced, aspect-level insights while remaining feasible for deployment on resource-constrained government infrastructure. The researchers curated and annotated the first large-scale multilabel dataset in this domain, consisting of 34,001 Bengali comments spanning twelve government sectors, such as the BRTA, Police Services, and Health Services. Each comment was manually labeled across four policy-relevant dimensions: overall sentiment, ease of finding information, responsiveness, and accuracy of service.\n\nThe methodology benchmarks various text representation techniques, including traditional Bag-of-Words (CountVectorizer) and state-of-the-art transformer models like BanglaBERT and mBERT, paired with classifiers such as Logistic Regression, Support Vector Classifier (SVC), and Naive Bayes. While transformer-based models like BanglaBERT+SVC achieved the highest raw performance—particularly on the policy-critical "Accuracy" task with a micro-average accuracy of approximately 0.93—the study emphasizes the importance of computational efficiency for real-world deployment. To identify the most practical solutions, the authors utilized an entropy-weighted TOPSIS (Technique for Order of Preference by Similarity to Ideal Solution) ranking system to evaluate models based on a balance of performance benefits (Accuracy, F1-score, AUC) and computational costs (Training and Inference time).\n\nThe results of the evaluation highlight a significant trade-off between model sophistication and speed. The TOPSIS analysis ranked the classical CountVectorizer with Logistic Regression (CV+LR) as the top overall choice due to its dominant efficiency, while BanglaBERT with a Logistic Regression head (BanglaBERT+LR) emerged as a close second, offering a superior accuracy-latency compromise. The paper concludes that while deep learning models provide the best insights, lightweight alternatives remain highly competitive and more suitable for the limited hardware environments common in developing nations. Ultimately, eGov-Lens provides both a foundational dataset for future Bengali NLP research and actionable guidance for government institutions to leverage data-driven insights for improving public service delivery.',
    tools: ['Python', 'PyTorch', 'Transformers', 'Scikit-learn'],
    highlights: [
      'Developed a custom dataset of Bengali e-gov feedback.',
      'Achieved high accuracy in aspect extraction and sentiment classification.',
      'Presented at ICCIT 2025.'
    ],
    links: [
      { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Md-Muqtadir-Fuad' }
    ]
  },
  {
    id: 2,
    slug: 'smart-conveyor',
    title: 'IoT-Based Smart Conveyor',
    category: 'IoT / Industrial Engineering',
    shortDescription: 'Integrated quality, inventory, and process control system using IoT.',
    imageUrl: 'https://github.com/md-muqtadir-fuad/iot-web-app/blob/master/groups/circuits/b4.png?raw=true',
    overview: 'A smart conveyor system designed for real-time monitoring of manufacturing processes. It integrates sensors and IoT modules to track quality metrics, inventory levels, and process efficiency.',
    detailedDescription: 'This project, titled "IoT-Based Smart Conveyor System for Integrated Quality, Inventory and Process Control," was developed by a team of students from the Bangladesh University of Engineering and Technology (BUET) to address the inefficiencies of manual quality inspection in manufacturing. The system serves as an automated weight-sorting solution designed to enhance production speed, accuracy, and consistency. By integrating hardware such as a 5kg load cell with an HX711 amplifier for precise weighing and an HC-SR04 ultrasonic sensor for object detection, the prototype can validate products in real-time. The control logic is managed by an Arduino Uno and an ESP32 Wi-Fi module, which allows for seamless IoT connectivity and data transmission to a central server for inventory tracking.\n\nThe functional mechanism of the conveyor begins with weight measurement; the system compares the recorded value against a predefined threshold stored in a database. If the item meets the quality standards, the L298N motor driver activates a 600 RPM DC gear motor to move the conveyor belt. Once the object is detected by the ultrasonic sensor further down the line, the system increments the inventory count and triggers an SG-90 micro servomotor to sort the product into a specific section. This process is visualized through real-time data plots of load sensor and ultrasonic sensor readings, which are essential for process monitoring. Beyond simple sorting, the project aligns with Industry 4.0 standards by facilitating smart factory integration, remote monitoring via app integration, and providing a foundation for future AI-based predictive quality analysis.',
    tools: ['Arduino', 'ESP32'],
    highlights: [
      'Real-time data visualization dashboard through API.',
      'Automated quality rejection mechanism.',
    ],
    links: [
      { label: 'Poster', url: 'https://doi.org/10.13140/RG.2.2.25476.23683' }
    ]
  },
  {
    id: 3,
    slug: 'iot-web-app',
    title: 'IoT-Enabled Web Application',
    category: 'IoT / Web Application',
    shortDescription: 'A lightweight web portal for the Computer Integrated Manufacturing (CIM) course at BUET (Department of IPE).It showcases student project groups, posters, and (optionally) surfaces sensor data via simple PHP endpoints.',
    imageUrl: 'https://private-user-images.githubusercontent.com/87650669/479851827-21cb13aa-001c-45d2-aa31-3d6402283a97.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzQzNjg4NDQsIm5iZiI6MTc3NDM2ODU0NCwicGF0aCI6Ii84NzY1MDY2OS80Nzk4NTE4MjctMjFjYjEzYWEtMDAxYy00NWQyLWFhMzEtM2Q2NDAyMjgzYTk3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAzMjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMzI0VDE2MDkwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTIwYmYxNjFlZjQ2ZjViZmZmZWZlZWM3Y2UzZDAyNzU5OTRlMzRhZWQ4MzZiM2EwNWVhZTU5MzdhNmQzOWJkZTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.bFjwc9bsn-yBv_rAzKsFk5pUrhUrLXWU6F0RfSl5zEc',
    overview: 'This web application was designed to facilitate real-time communication between IoT sensors and a centralized control interface.',
    detailedDescription: 'Developed for the Computer Integrated Manufacturing (CIM) course at the Bangladesh University of Engineering and Technology (BUET), this "IoT-Enabled Web Application" serves as a comprehensive digital repository and live monitoring portal for student projects within the Department of Industrial and Production Engineering (IPE). The platform is designed to provide a centralized hub for showcasing the technical achievements of various student cohorts (Groups A1–A12 and B1–B12), specifically highlighting their high-resolution project posters, intricate circuit designs, and hardware implementation details. By utilizing a modern technology stack consisting of HTML, Tailwind CSS, and JavaScript for a responsive frontend, coupled with PHP for backend data handling, the application offers an intuitive and functional user experience for both students and faculty.\n\nOne of the standout features of the portal is its integrated IoT functionality, which allows it to surface sensor data via lightweight PHP endpoints. Scripts such as "fetch_sensors.php" and "get_max_sensor_data.php" enable the application to communicate with backend databases, effectively visualizing real-time or logged data from student-built manufacturing systems. The project is meticulously organized into a modular structure, ensuring that media assets like posters and circuit diagrams are easily accessible through dedicated group pages. Beyond its role as a project gallery, the application functions as a formal course portal, featuring landing pages for general course information and contact details. Ultimately, this web application bridges the gap between traditional manufacturing engineering and modern data-driven technologies, providing a scalable model for academic project management and remote process monitoring.',
    tools: ['PHP', 'JS'],
    highlights: [
      'Receiving live data from ESP-based devices.',
      'Displaying sensor readings via dynamic graphs.',
      'Sending responsive commands to actuators based on the data received.',
    ],
    links: [
      { label: 'Repository', url: 'https://github.com/md-muqtadir-fuad/iot-web-app' }
    ]
  },
  {
    "id": 4,
    "slug": "badhan-data-automation",
    "title": "Badhan BUET Zone Web Automation",
    "category": "Automation / Web Scripting",
    "shortDescription": "A robust Python and Selenium automation script designed to bulk upload and manage blood donor records into the Badhan BUET Zone web platform from CSV data files.",
    "imageUrl": "https://github.com/md-muqtadir-fuad/portfolio/blob/master/public/images/badhan-pull.png?raw=true",
    "overview": "This automation script was designed to eliminate tedious manual data entry by systematically parsing and uploading batch donor records into a centralized blood donation database.",
    "detailedDescription": "Developed to support the operations of Badhan BUET Zone, this project features a reliable Python automation script built with Selenium WebDriver and Pandas. It streamlines the data entry process by reading batch donor information from a CSV file and interacting directly with the organization's web application frontend. The script systematically navigates the UI, handles user authentication, and fills out the complex donor creation form. \n\nTo ensure data integrity and script stability, the automation includes several advanced features. It actively checks for duplicate entries via phone number validation to prevent redundant records. It also employs robust dropdown selection mechanisms using JavaScript execution to handle dynamic UI elements reliably. Furthermore, the script features resilient error management; if an entry fails, it captures a screenshot for debugging purposes, clears the browser state via a hard reload, and intelligently recovers to continue processing the rest of the dataset. This tool drastically reduces administrative workload while maintaining high accuracy for the blood donation organization.",
    "tools": [
      "Selenium",
      "Figma UX Design",
      "Feature Review",
      "Q/A & Test"
    ],
    "highlights": [
      "Automated bulk data entry from CSV files directly into a complex web application frontend.",
      "Intelligent duplicate detection system to prevent redundant donor records.",
      "Robust error handling with automatic UI state recovery and debugging screenshot generation."
    ],
    "links": [
      {
        "label": "Pull Request",
        "url": "https://github.com/Badhan-BUET-Zone/badhan/pull/86"
      },
      {
        "label": "Live Site",
        "url": "https://badhan-buet.web.app/#/credits"
      }
    ]
  }
];
