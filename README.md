# Md. Muqtadir Fuad — Portfolio

A personal academic and engineering portfolio built to showcase research, projects, experience, publications, and achievements.

## Overview

This portfolio presents the work of **Md. Muqtadir Fuad**, an undergraduate student at **BUET** with interests in industrial engineering, operations research, machine learning, NLP, and data-driven engineering systems.

The site is designed as a modern, responsive portfolio with separate sections for:

* About
* Projects
* Publications
* Experience
* Achievements
* Contact
* Admin

## Tech Stack

* **Frontend:** React, TypeScript, Vite
* **Backend:** Node.js, Express
* **Database / Auth:** Firebase
* **Styling & UI:** CSS, Lucide React, Motion

## Main Features

* Responsive portfolio website
* Separate pages for projects, publications, experience, and achievements
* Project and publication detail pages
* Admin page for content management
* Firebase integration
* Resume hosting
* Static asset management for certificates, profile image, and project visuals

## Project Structure

```text
.
├── public/
│   ├── images/                  # Portfolio images, certificates, project visuals
│   └── resume/                  # Resume PDF
├── src/
│   ├── components/              # Reusable UI components
│   ├── data/                    # Static data sources
│   │   ├── aboutData.ts
│   │   ├── achievementsData.ts
│   │   ├── experienceData.ts
│   │   ├── projectsData.ts
│   │   └── publicationsData.ts
│   ├── pages/                   # Main route pages
│   ├── App.tsx                  # App routing/layout
│   ├── constants.ts             # Shared constants
│   ├── firebase.ts              # Firebase config/init
│   ├── index.css                # Global styles
│   └── main.tsx                 # Frontend entry point
├── server.ts                    # Express server
├── firestore.rules              # Firestore security rules
├── firebase-applet-config.json  # Firebase app config
├── firebase-blueprint.json      # Firebase data blueprint
├── package.json
├── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

* Node.js
* npm

### Installation

```bash
git clone https://github.com/md-muqtadir-fuad/portfolio.git
cd portfolio
npm install
```

### Run in development

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Environment and Firebase

This project uses Firebase configuration files and environment setup.

### Setup

1. Copy `.env.example` to `.env`
2. Add the required environment values
3. Configure Firebase as needed for your project

Depending on your setup, you may also need:

* `firebase-applet-config.json`
* Firestore rules deployment
* Firebase project credentials

## Content Management

Most portfolio content is currently organized through static data files inside `src/data/`.

These files control the displayed content for:

* About
* Achievements
* Experience
* Projects
* Publications

To update portfolio content, edit the corresponding data file.

## Assets

Images are stored in `public/images/`.

Resume file is stored in `public/resume/`.

## Deployment

This project includes:

* `vercel.json` for deployment configuration
* Vite for frontend bundling
* Express server support through `server.ts`

You can deploy it on platforms such as **Vercel** or another Node-compatible host depending on how you want to serve the app.

## License

This repository is for personal portfolio use unless stated otherwise.

## Contact

* **Email:** [mmfuad01@gmail.com](mailto:mmfuad01@gmail.com)
* **GitHub:** [md-muqtadir-fuad](https://github.com/md-muqtadir-fuad)
* **LinkedIn:** [md-muqtadir-fuad](https://www.linkedin.com/in/md-muqtadir-fuad/)
* **ORCID:** [0009-0009-4362-0780](https://orcid.org/0009-0009-4362-0780)
