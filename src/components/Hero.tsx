import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import engineerPortrait from '@/assets/engineer-portrait.jpg';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 fade-in-left">
            <div className="space-y-4">
              <h2 className="text-primary font-mono text-lg">Hi, my name is</h2>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="text-foreground">Aref</span>
                <br />
                <span className="gradient-text">Elaggoun</span>
              </h1>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground-secondary">
                I build exceptional digital experiences.
              </h3>
            </div>
            
            <p className="text-xl text-foreground-muted leading-relaxed max-w-lg">
              I'm a software engineer specializing in building accessible, pixel-perfect 
              user interfaces that blend thoughtful design with robust engineering. 
              Currently focused on creating innovative solutions at the intersection of 
              design and technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-primary"
                onClick={scrollToNext}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-foreground-muted text-foreground-muted hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end fade-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-full blur-3xl animate-glow-pulse" />
                
                {/* Image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-elevated">
                  <img 
                    src={engineerPortrait}
                    alt="Aref Elaggoun - Software Engineer" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20" />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float" />
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary-glow rounded-full animate-float" style={{ animationDelay: '2s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground-muted hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;