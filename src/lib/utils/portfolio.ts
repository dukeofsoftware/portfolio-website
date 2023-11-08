import { author, socialLinks } from '@/lib/content/portfolio';
import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  Section,
  SkillsSectionType,
  SocialSectionType,
} from '@/lib/types/sections';

import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'furkan emre kozan.',
  tagline: 'I build things for the web.',
  description:
  "I am an active student at Haydarpaşa High School in various fields. I actively take part in Haydarpaşa High School's FRC, MUN, Academy, Informatics clubs, participate in events and develop projects. I like to help and support people. My biggest hobby is software development.",

  specialText: 'Currently available for a job & freelance',
  // either button or simple text (information)
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from containers/About.tsx
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'NextJs',
      'ReactJs',
      'Astro',
      'TailwindCSS',
      'PostgreSQL',
      'TypeScript',
    ],
  },
  img: '/furkan-emre-kozan.png',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building fullstack websites and web apps using Next.js, React.js, Express.js, MongoDB, TypeScript, TailwindCSS',
        'Building responsive websites and web apps using Astro',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'sql', icon: 'vscode-icons:file-type-sql' },
        { name: 'mongodb', icon: 'vscode-icons:file-type-mongo' },
        { name: 'amazon', icon: 'cib:amazon-aws' },

        { name: 'npm', icon: 'vscode-icons:file-type-npm' },
        { name: 'git', icon: 'logos:git-icon' },
        { name: 'github', icon: 'logos:github-icon' },
        { name: 'vscode', icon: 'logos:visual-studio-code' },
      ],
    },

    {
      id: getId(),
      title: 'FRC Robot Development',
      lottie: {
        light: '/lotties/ethereum.json',
        dark: '/lotties/ethereum-dark.json',
      },
      points: ['Experience in developing FRC robots using Java'],
      softwareSkills: [
        { name: 'frc', icon: 'simple-icons:first' },
        { name: 'java', icon: 'devicon:java' },
      ],
    },
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Haydarpaşa Panthers',
      companyUrl: 'https://team9231.com/#portfolio-section',
      role: 'Software Developer',
      started: 'august 2023',
      upto: 'present',
      tasks: [
        'Developing FRC robots using Java.',
        'Automating the robot using sensors.',
        'Doing social responsibility projects.',
      ],
    },
    {
      company: 'Haydarpaşa IT Club',
      companyUrl: '#',
      role: 'Software Development Mentor',
      started: 'march 2023',
      upto: 'present',
      tasks: [
        'Teaching students how to code.',
        'Developing projects for our school.',
        'Train students for FRC competitions.',
      ],
    },
    {
      company: 'Haydarpaşa Academy',
      companyUrl: 'https://academy.haydarpasa.k12.tr',
      role: 'Team Captain',
      started: 'may 2023',
      upto: 'present',
      tasks: [
        'Leading the team.',
        'Managing the team.',
        "Developing the team's website.",
      ],
    },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Film and Series Tracker',
      url: 'https://zaratracker.vercel.app/',
      repo: 'https://github.com/dukeofsoftware/series-tracker-v2',
      img: 'https://user-images.githubusercontent.com/89215036/262652864-31179e16-4aa4-46bf-86ca-a208b56938ac.png',
      year: 2023,
      tags: ['NextJS', 'TailwindCSS', 'Firebase'],
    },
    {
      id: getId(),
      name: 'AI Chat Application',
      url: 'https://ai-chat-app-nu.vercel.app/',
      repo: 'https://github.com/dukeofsoftware/ai-chat-app',
      img: 'https://user-images.githubusercontent.com/89215036/254385367-ea75fd5a-871f-4aaf-8b2a-63f38ff04ee7.png',
      year: 2023,
      tags: ['React', 'Tailwind'],
    },
    {
      id: getId(),
      name: 'Translate App',
      url: 'https://berapp-translate.vercel.app/',
      repo: 'https://github.com/dukeofsoftware/translator-berapp',
      img: 'https://user-images.githubusercontent.com/89215036/234583652-ddde361a-9040-410b-b8ea-b18a211a4bde.png',
      year: 2023,
      tags: ['NextJS', 'Mantine', 'OpenAI'],
    },

    {
      id: getId(),
      name: 'Akademi Website',
      url: 'https://academy.haydarpasa.k12.tr',
      repo: '#',
      img: 'https://user-images.githubusercontent.com/89215036/280001669-af8a3154-6636-4855-a62c-19ee5ae9f513.png',
      year: 2023,
      tags: ['Astro', 'TailwindCSS'],
    },
    /*    {
      id: getId(),
      name: 'Haydarpaşa High School Website',
      url: 'http://haydarpasa.k12.tr',
      repo: 'https://github.com/dukeofsoftware/haydarpasa-website-last',
      img: 'https://user-images.githubusercontent.com/68834718/169527851-19fefb2e-e440-411a-a8a1-4767e2c8688a.png',
      year: 2022,
      tags: ['NextJS', 'TailwindCSS'],
    }, */
    {
      id: getId(),
      name: 'Figma Desing Challange',
      url: 'https://nft-challange-one.vercel.app/',
      repo: 'https://github.com/dukeofsoftware/nft-challange',
      img: 'https://github.com/dukeofsoftware/nft-challange/blob/main/Ekran%20G%C3%B6r%C3%BCnt%C3%BCs%C3%BC%20-%202023-11-08%2017-31-16.png',
      year: 2022,
      tags: ['NextJS', 'Design'],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I’m currently looking for a remote job or any new opportunities.',
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },

    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
  ],
};

// Footer Section

export const footerSection: Section = {
  title: 'Design & Built by Vatsal Singh',
};
