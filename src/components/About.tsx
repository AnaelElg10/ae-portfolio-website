import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 
    'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS',
    'Docker', 'GraphQL', 'Tailwind CSS', 'Git', 'Figma'
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
                Building the future, one line at a time.
              </h3>
            </div>

            <div className="space-y-6 text-foreground-muted text-lg leading-relaxed">
              <p>
                Hello! I'm Alex, a passionate software engineer with a love for creating 
                digital experiences that make a difference. My journey in tech started back 
                in 2018 when I built my first website – turns out building things for the 
                web is incredibly rewarding!
              </p>

              <p>
                Fast-forward to today, and I've had the privilege of working at a variety of 
                companies, from{' '}
                <span className="text-primary hover:underline cursor-pointer">
                  innovative startups
                </span>{' '}
                to{' '}
                <span className="text-primary hover:underline cursor-pointer">
                  established enterprises
                </span>. 
                My main focus these days is building accessible, performant products and 
                leading engineering initiatives that drive real business impact.
              </p>

              <p>
                I also recently launched a{' '}
                <span className="text-primary hover:underline cursor-pointer">
                  comprehensive course
                </span>{' '}
                covering modern full-stack development, helping developers level up their 
                skills with practical, real-world projects.
              </p>

              <p>
                Here are a few technologies I've been working with recently:
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
              <h4 className="text-2xl font-bold text-foreground mb-6">Quick Stats</h4>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-foreground-muted text-sm">Years Experience</div>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-foreground-muted text-sm">Projects Completed</div>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">15+</div>
                  <div className="text-foreground-muted text-sm">Technologies</div>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">3</div>
                  <div className="text-foreground-muted text-sm">Companies</div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-foreground">What drives me</h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Clean Code</h5>
                    <p className="text-foreground-muted text-sm">
                      Writing maintainable, scalable code that stands the test of time.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">User-Centric Design</h5>
                    <p className="text-foreground-muted text-sm">
                      Building experiences that users love and accessibility for all.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary-glow rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Continuous Learning</h5>
                    <p className="text-foreground-muted text-sm">
                      Staying up-to-date with the latest technologies and best practices.
                    </p>
                  </div>
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