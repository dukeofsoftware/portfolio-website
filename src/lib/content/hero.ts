import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'furkan emre kozan.',
  tagline: 'I create fullstack web and mobile applications.',
  description:
    "I'm a student and developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at Upwork.",
  specialText: 'Currently available for a job & freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
