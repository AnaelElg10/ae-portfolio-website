import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Menu, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AnaelElg10', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arefelaggoun10/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:elaggounaref.business@gmail.com', label: 'Email' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollY = window.scrollY + 150; // Increased offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col space-y-6">
          {/* Navigation dots */}
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative flex items-center transition-all duration-300 hover:scale-110"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`nav-dot transition-all duration-300 ${activeSection === item.id ? 'active scale-125' : 'hover:scale-110'}`} />
                <span className="absolute left-6 px-3 py-1 bg-card/90 backdrop-blur-sm text-card-foreground text-sm rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-border/50 transform translate-x-2 group-hover:translate-x-0">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Social links */}
          <div className="flex flex-col space-y-4 pt-8 border-t border-border">
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative transition-all duration-300 hover:scale-110"
                style={{ animationDelay: `${(index + navItems.length) * 0.1}s` }}
              >
                <link.icon className="w-5 h-5 text-foreground-muted hover:text-primary transition-all duration-300 hover:scale-110" />
                <span className="absolute left-8 px-3 py-1 bg-card/90 backdrop-blur-sm text-card-foreground text-sm rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-border/50 transform translate-x-2 group-hover:translate-x-0">
                  {link.label}
                </span>
                {link.label !== 'Email' && (
                  <ExternalLink className="w-3 h-3 absolute -top-1 -right-1 text-foreground-muted opacity-0 group-hover:opacity-100 transition-all duration-300" />
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-6 right-6 z-50 w-12 h-12 bg-card/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {/* Navigation Links */}
              <div className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-2xl font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
                      activeSection === item.id ? 'text-primary scale-105' : 'text-foreground'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Mobile Social Links */}
              <div className="flex space-x-8 pt-8 border-t border-border">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative transition-all duration-300 hover:scale-110"
                    style={{ animationDelay: `${(index + navItems.length) * 0.1}s` }}
                    aria-label={link.label}
                  >
                    <link.icon className="w-8 h-8 text-foreground-muted hover:text-primary transition-all duration-300" />
                    {link.label !== 'Email' && (
                      <ExternalLink className="w-4 h-4 absolute -top-1 -right-1 text-foreground-muted opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;