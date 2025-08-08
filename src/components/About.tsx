import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    'Python', 'TypeScript', 'React', 'Next.js', 'Angular', 
    'AWS', 'Docker', 'Kubernetes', 'Node.js', 'PostgreSQL',
    'PyTorch', 'TensorFlow', 'GitLab CI/CD', 'IoT Core', 'DynamoDB'
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - About content */}
          <div className="space-y-8 fade-in-left">
            <div className="space-y-4">
              <h2 className="text-primary font-mono text-lg">01. About Me</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground">
                Where Innovation Meets 
                <span className="text-primary"> Limitless Ambition</span>
              </h3>
            </div>

            <div className="space-y-6 text-foreground-muted text-lg leading-relaxed">
              <p className="text-xl text-foreground leading-relaxed">
                <strong className="text-primary">I'm driven by an unstoppable passion to innovate across the engineering spectrum.</strong> I don't just solve problems; I reimagine what's possible.
              </p>

              <p>
                As a Computer Science Engineer from{' '}
                <span className="text-primary font-semibold">University of Caen Normandy</span>, 
                I specialize in{' '}
                <span className="text-primary">cloud architecture, AI/ML innovation, and full-stack development</span>. 
                With experience in{' '}
                <span className="text-foreground font-semibold hover:text-primary transition-colors cursor-pointer">
                  different  industries
                </span>{' '}
                I build scalable solutions that drive measurable impact.
              </p>

              <p>
                <span className="text-foreground font-semibold">Fluent in five languages</span> and 
                ready for global challenges, I engineer solutions that{' '}
                <span className="text-primary font-semibold">redefine possibilities</span>.
              </p>

              <p className="text-foreground">
                Technologies I'm mastering:
              </p>
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="border-primary/30 text-foreground-secondary hover:border-primary hover:text-primary transition-all duration-300 cursor-default text-center justify-center py-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right side - Stats and highlights */}
          <div className="space-y-8 fade-in-right">
            <div className="glass rounded-2xl p-8 space-y-8">
              <h4 className="text-2xl font-bold text-foreground mb-6">Impact by Numbers</h4>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">5</div>
                  <div className="text-foreground-muted text-sm">Languages Fluent</div>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">65%</div>
                  <div className="text-foreground-muted text-sm">Efficiency Gained</div>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-foreground-muted text-sm">IoT Devices Managed</div>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">100%</div>
                  <div className="text-foreground-muted text-sm">IaC Coverage</div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-primary/20">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-primary font-semibold">Open to Global Opportunities</span>
                </div>
              </div>
            </div>

            {/* Core Strengths */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-foreground">What Sets Me Apart</h4>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground-muted">Full-stack mastery from DevOps to AI/ML</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground-muted">Real-world impact at global companies</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground-muted">Five-language fluency for global collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;