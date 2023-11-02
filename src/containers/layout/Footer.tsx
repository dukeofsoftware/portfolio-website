import { footerSection } from '@/lib/content/footer';

import SocialLinks from '../Social/SocialLinks';

const Footer = () => {
  return (
    <footer className="max-w-lg mx-auto mb-5 font-mono text-xs text-center">
      <SocialLinks className="flex justify-center gap-3 mb-3 md:hidden" />
      <p className="transition">
        {footerSection.title}
      </p>
    </footer>
  );
};

export default Footer;
