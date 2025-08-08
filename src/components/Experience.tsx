import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Orange Business',
      role: 'Cloud DevOps & Software Engineer Intern',
      period: 'Mar 2025 — Aug 2025',
      location: 'Cesson-Sévigné, France',
      type: 'Internship',
      description: [
        'Architected a enterprise-grade IoT cloud platform on AWS, seamlessly connecting 50+ devices with real-time data processing and automated provisioning',
        'Revolutionized device onboarding by implementing full automation, reducing manual setup time by 65% through intelligent certificate handling and shadow state synchronization',
        'Built production-ready CI/CD pipelines with comprehensive testing and security gates, achieving 100% Infrastructure as Code coverage for enhanced system reliability',
        'Developed a modern Angular dashboard with real-time IoT telemetry, secured with OAuth2 authentication, delivering a complete end-to-end solution'
      ],
      impact: {
        devices: '50+',
        efficiency: '65%',
        automation: '100%'
      },
      technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'Angular', 'GitLab CI/CD', 'OAuth2', 'IoT Core', 'AWS SAM', 'Cognito'],
      link: 'https://www.orange-business.com'
    },
    {
      company: 'Touwi',
      role: 'Software Engineer',
      period: 'Sep 2024 — Jan 2025',
      location: 'Caen, France',
      type: 'Full-time',
      description: [
        'Engineered a high-performance React/Next.js web application with advanced data synchronization, improving accuracy by 30% through optimized algorithms',
        'Accelerated API response times by 40% using sophisticated caching strategies and performance optimization techniques',
        'Collaborated seamlessly with a diverse team of 15 developers and designers to deliver a scalable, production-ready full-stack solution',
        'Enhanced user experience and data reliability through modern development practices and comprehensive testing strategies'
      ],
      impact: {
        accuracy: '30%',
        performance: '40%',
        teamSize: '15'
      },
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Redis', 'PostgreSQL', 'Docker', 'Git', 'REST APIs'],
      link: 'https://touwi.fr'
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
                    <div className="lg:col-span-4 space-y-6">
                      <div className="space-y-3">
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
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                              {exp.type}
                            </Badge>
                          </div>
                          <div className="text-foreground-muted text-sm">{exp.period}</div>
                          <div className="text-foreground-muted text-sm">📍 {exp.location}</div>
                        </div>
                      </div>

                      {/* Impact Metrics */}
                      <div className="space-y-3">
                        <h6 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                          Key Impact
                        </h6>
                        <div className="grid grid-cols-1 gap-2">
                          {Object.entries(exp.impact).map(([key, value]) => (
                            <div key={key} className="flex items-center justify-between p-2 bg-primary/5 rounded-lg">
                              <span className="text-foreground-muted text-xs capitalize">
                                {key === 'teamSize' ? 'Team Size' : 
                                 key === 'devices' ? 'IoT Devices' :
                                 key === 'efficiency' ? 'Time Saved' :
                                 key === 'automation' ? 'IaC Coverage' :
                                 key === 'accuracy' ? 'Data Accuracy' :
                                 key === 'performance' ? 'Performance' : key}
                              </span>
                              <span className="text-primary font-bold text-sm">
                                {key === 'teamSize' || key === 'devices' ? value : 
                                 key === 'automation' ? `${value} IaC` :
                                 `+${value}`}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h6 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                          Tech Stack
                        </h6>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <Badge 
                              key={tech}
                              variant="outline"
                              className="border-primary/30 text-foreground-secondary hover:border-primary hover:text-primary transition-all duration-300 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right side - Role description */}
                    <div className="lg:col-span-8">
                      <div className="space-y-2 mb-4">
                        <h6 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                          What I Accomplished
                        </h6>
                      </div>
                      <ul className="space-y-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
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