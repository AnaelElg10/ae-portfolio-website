import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/AnaelElg10',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/arefelaggoun10/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:elaggounaref.business@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Social links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === 'Email' ? undefined : '_blank'}
                rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
                aria-label={link.label}
                className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-foreground-muted hover:text-primary hover:bg-primary/20 transition-all duration-300"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Footer text */}
          <div className="text-center space-y-2">
            <button
              onClick={scrollToTop}
              className="text-foreground-muted hover:text-primary transition-colors animated-underline font-mono text-sm"
              aria-label="Back to top"
            >
              Aref Elaggoun
            </button>

            <p className="text-foreground-muted text-sm flex items-center justify-center">
              Built with React & Tailwind CSS
            </p>

            <p className="text-foreground-muted text-xs">
              © {new Date().getFullYear()} Aref Elaggoun. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;