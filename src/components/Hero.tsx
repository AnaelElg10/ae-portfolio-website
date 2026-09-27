import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Main content */}
          <div className="space-y-8 fade-in-left">
            <div className="space-y-4">
              <h2 className="text-primary font-mono text-lg">
                Hi, my name is
              </h2>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="text-foreground">Aref</span>
                <br />
                <span className="gradient-text">Elaggoun</span>
              </h1>

              <h3 className="text-3xl lg:text-4xl font-bold text-foreground-secondary">
                I build reliable software, cloud infrastructure, and intelligent systems.
              </h3>
            </div>

            <p className="text-xl text-foreground-muted leading-relaxed max-w-3xl mx-auto">
              I'm a Computer Science Engineer working across Software Engineering,
              Cloud, DevOps, Cybersecurity, Data, and AI. I build scalable systems,
              automate infrastructure, and turn technical ideas into practical
              products and reliable engineering solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-primary btn-smooth"
                onClick={scrollToContact}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;