import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Film and Series Tracker',
      url: 'https://zaratracker.vercel.app',
      repo: 'https://github.com/dukeofsoftware/series-tracker-v2',
      img: 'https://user-images.githubusercontent.com/89215036/262652864-31179e16-4aa4-46bf-86ca-a208b56938ac.png',
      year: 2023,
      tags: ['Next.js', 'Firebase', 'Tailwind'],
    },
    {
      id: getId(),
      name: 'Haydarpaşa Akademi Website',
      url: 'https://academy.haydarpasa.k12.tr/',
      repo: '#',
      img: 'https://user-images.githubusercontent.com/89215036/280001669-af8a3154-6636-4855-a62c-19ee5ae9f513.png',
      year: 2023,
      tags: ['Astro', 'Landing'],
    },
    {
      id: getId(),
      name: 'AI Chat Application',
      url: '#',
      repo: 'https://github.com/dukeofsoftware/ai-chat-app',
      img: 'https://user-images.githubusercontent.com/89215036/254385367-ea75fd5a-871f-4aaf-8b2a-63f38ff04ee7.png',
      year: 2023,
      tags: ['Next.js', 'Tailwind', 'OpenAI'],
    },
    {
      id: getId(),
      name: 'AI Translator App',
      url: '#',
      repo: 'https://github.com/dukeofsoftware/translator-berapp',
      img: 'https://user-images.githubusercontent.com/89215036/234583652-ddde361a-9040-410b-b8ea-b18a211a4bde.png',
      year: 2022,
      tags: ['Next.js', 'Mantine', 'OpenAI'],
    },
  ],
};
