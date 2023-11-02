import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive static websites using Next.js',
        'Building responsive Single Page Apps in React.js',
        'Building RESTful APIs in Express',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'typescript', icon: 'devicon:typescript' },
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'vue', icon: 'logos:vue' },
        { name: 'Nuxt', icon: 'logos:nuxt-icon' },
        { name: 'mdx', icon: 'logos:mdx' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
      ],
    },
   
  ],
};
