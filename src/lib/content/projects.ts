import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

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