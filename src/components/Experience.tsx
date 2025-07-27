import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'TechCorp',
      role: 'Senior Software Engineer',
      period: '2022 — Present',
      location: 'San Francisco, CA',
      description: [
        'Lead development of critical user-facing features using React, TypeScript, and Node.js',
        'Architected and implemented a design system that improved development velocity by 40%',
        'Mentored 5+ junior developers and established best practices for code quality',
        'Collaborated with product and design teams to deliver user-centric solutions'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'PostgreSQL'],
      link: 'https://techcorp.com'
    },
    {
      company: 'StartupXYZ',
      role: 'Full Stack Developer',
      period: '2020 — 2022',
      location: 'Remote',
      description: [
        'Built and maintained multiple client applications from concept to production',
        'Developed REST APIs and microservices handling 100k+ daily requests',
        'Implemented automated testing and CI/CD pipelines reducing deployment time by 60%',
        'Worked directly with clients to gather requirements and deliver custom solutions'
      ],
      technologies: ['Vue.js', 'Python', 'Django', 'Docker', 'MongoDB', 'Redis'],
      link: 'https://startupxyz.com'
    },
    {
      company: 'WebAgency',
      role: 'Frontend Developer',
      period: '2018 — 2020',
      location: 'New York, NY',
      description: [
        'Developed responsive websites and web applications for diverse clientele',
        'Converted design mockups into pixel-perfect, interactive user interfaces',
        'Optimized applications for maximum speed and scalability',
        'Collaborated with designers and project managers in agile development cycles'
      ],
      technologies: ['JavaScript', 'React', 'SCSS', 'Webpack', 'jQuery', 'PHP'],
      link: 'https://webagency.com'
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          {/* Section header */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-primary font-mono text-lg">02. Where I've Worked</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground">
              Professional Journey
            </h3>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Building impactful products and leading engineering initiatives across different scales and industries.
            </p>
          </div>

          {/* Experience timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.company}
                className="glass border-card-border hover:border-primary/30 transition-all duration-500 fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8 lg:p-10">
                  <div className="grid lg:grid-cols-12 gap-8">
                    {/* Left side - Company info */}
                    <div className="lg:col-span-4 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <h4 className="text-2xl font-bold text-foreground">{exp.company}</h4>
                          <a 
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground-muted hover:text-primary transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                        <h5 className="text-lg font-semibold text-primary">{exp.role}</h5>
                        <div className="space-y-1 text-foreground-muted text-sm">
                          <div>{exp.period}</div>
                          <div>{exp.location}</div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h6 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                          Technologies
                        </h6>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge 
                              key={tech}
                              variant="outline"
                              className="border-primary/30 text-foreground-secondary hover:border-primary hover:text-primary transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right side - Role description */}
                    <div className="lg:col-span-8">
                      <ul className="space-y-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-foreground-muted leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;