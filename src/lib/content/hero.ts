import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

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

