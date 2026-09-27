import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    'Python',
    'Go',
    'Java',
    'TypeScript',
    'React',
    'Next.js',
    'Angular',
    'AWS',
    'Terraform',
    'Docker',
    'Kubernetes',
    'Linux',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'PyTorch',
    'TensorFlow',
    'GitLab CI/CD'
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - About content */}
          <div className="space-y-8 fade-in-left">
            <div className="space-y-4">
              <h2 className="text-primary font-mono text-lg">
                01. About Me
              </h2>

              <h3 className="text-4xl lg:text-5xl font-bold text-foreground">
                Building Across
                <span className="text-primary"> Software, Cloud, Data & AI</span>
              </h3>
            </div>

            <div className="space-y-6 text-foreground-muted text-lg leading-relaxed">
              <p className="text-xl text-foreground leading-relaxed">
                <strong className="text-primary">
                  I'm a Computer Science Engineer with hands-on experience across
                  software engineering, cloud infrastructure, DevOps, cybersecurity,
                  data, and AI.
                </strong>
              </p>

              <p>
                I studied Computer Science at{' '}
                <span className="text-primary font-semibold">
                  University of Caen Normandy
                </span>
                , and I've worked across production engineering, cloud systems,
                backend development, infrastructure automation, IoT, data, and
                intelligent applications.
              </p>

              <p>
                My experience includes working with production systems at{' '}
                <span className="text-foreground font-semibold">
                  Hootsuite / Talkwalker
                </span>
                , building AWS and IoT solutions at{' '}
                <span className="text-foreground font-semibold">
                  Orange Business
                </span>
                , contributing to software development at{' '}
                <span className="text-foreground font-semibold">
                  Touwi
                </span>
                , and developing independent projects across several technical
                domains.
              </p>

              <p>
                I enjoy working across the stack, from APIs and distributed systems
                to cloud infrastructure, CI/CD, containers, automation, data
                pipelines, and AI-powered applications.
              </p>

              <p>
                <span className="text-foreground font-semibold">
                  Fluent in multiple languages
                </span>{' '}
                and open to international opportunities, I bring a broad technical
                perspective and the ability to adapt quickly to new environments,
                technologies, and engineering challenges.
              </p>

              <p className="text-foreground">
                Technologies I work with:
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
              <h4 className="text-2xl font-bold text-foreground mb-6">
                Impact by Numbers
              </h4>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">
                    5
                  </div>

                  <div className="text-foreground-muted text-sm">
                    Languages
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">
                    65%
                  </div>

                  <div className="text-foreground-muted text-sm">
                    Manual Work Reduced
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">
                    50+
                  </div>

                  <div className="text-foreground-muted text-sm">
                    IoT Devices
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">
                    100%
                  </div>

                  <div className="text-foreground-muted text-sm">
                    IaC Coverage
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-primary/20">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />

                  <span className="text-primary font-semibold">
                    Open to Global Opportunities
                  </span>
                </div>
              </div>
            </div>

            {/* Core Strengths */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-foreground">
                What I Bring
              </h4>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />

                  <span className="text-foreground-muted">
                    Experience across software engineering, cloud, DevOps,
                    cybersecurity, data, and AI
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />

                  <span className="text-foreground-muted">
                    Hands-on work with production systems, infrastructure
                    automation, APIs, containers, and cloud platforms
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />

                  <span className="text-foreground-muted">
                    Strong adaptability across different technologies,
                    environments, and international teams
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />

                  <span className="text-foreground-muted">
                    Multilingual communication for international collaboration
                  </span>
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