import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

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