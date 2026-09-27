import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Hootsuite / Talkwalker',
      role: 'Junior Software Developer, DevOps',
      period: 'Apr 2026 — Present',
      location: 'Luxembourg',
      type: 'Full-time',
      description: [
        'Worked with production distributed systems in Linux environments, supporting reliable day-to-day application and infrastructure operations',
        'Built and maintained automation using Python, Bash, and Go to simplify engineering and operational workflows',
        'Investigated application and infrastructure issues through debugging, log analysis, and systematic troubleshooting',
        'Worked across cloud infrastructure, CI/CD, containers, and production engineering workflows in an international engineering environment'
      ],
      technologies: [
        'Python',
        'Go',
        'Bash',
        'Linux',
        'AWS',
        'Docker',
        'Kubernetes',
        'CI/CD'
      ],
      link: 'https://www.hootsuite.com'
    },
    {
      company: 'Independent',
      role: 'Software, Cloud & DevOps Engineer',
      period: 'May 2023 — Present',
      location: 'Remote',
      type: 'Independent',
      description: [
        'Built software and cloud projects across backend engineering, DevOps, infrastructure, data, AI, and mobile development',
        'Automated cloud infrastructure and engineering workflows using Terraform, CloudFormation, Python, and Bash',
        'Built and deployed containerized applications using Docker and Kubernetes while working with monitoring, Linux, and networking tools',
        'Developed projects using Java/Spring Boot, Python, Node.js/TypeScript, React Native/Expo, PostgreSQL, MongoDB, Elasticsearch, and AWS'
      ],
      technologies: [
        'AWS',
        'Terraform',
        'CloudFormation',
        'Python',
        'Java',
        'Node.js',
        'TypeScript',
        'Docker',
        'Kubernetes',
        'React Native',
        'PostgreSQL',
        'MongoDB'
      ],
      link: 'https://github.com/AnaelElg10'
    },
    {
      company: 'Orange Business',
      role: 'AWS Cloud DevOps Engineer Intern',
      period: 'Mar 2025 — Aug 2025',
      location: 'Cesson-Sévigné, France',
      type: 'Internship',
      description: [
        'Built a modular IoT platform on AWS using Lambda, API Gateway, Cognito, DynamoDB, S3, and IoT Core to support real-time data from 50+ devices',
        'Automated device provisioning, certificate handling, and shadow-state workflows, reducing manual setup work by 65%',
        'Implemented CI/CD pipelines with GitLab and AWS SAM while maintaining 100% Infrastructure as Code coverage',
        'Developed an Angular dashboard for real-time IoT telemetry and secured application access using OAuth-based authentication'
      ],
      impact: {
        devices: '50+',
        efficiency: '65%',
        automation: '100%'
      },
      technologies: [
        'AWS Lambda',
        'API Gateway',
        'DynamoDB',
        'S3',
        'IoT Core',
        'AWS SAM',
        'Cognito',
        'GitLab CI/CD',
        'Angular',
        'OAuth2'
      ],
      link: 'https://www.orange-business.com'
    },
    {
      company: 'Touwi',
      role: 'Software Engineer',
      period: 'Sep 2024 — Jan 2025',
      location: 'Caen, France',
      type: 'Professional Experience',
      description: [
        'Built backend and full-stack components using Python, Java, and Node.js/TypeScript',
        'Developed and integrated REST and GraphQL APIs with PostgreSQL, MySQL, and MongoDB data stores',
        'Contributed to automated testing and continuous integration workflows using GitHub Actions and Docker',
        'Worked collaboratively on product development and participated in client-facing presentations and technical discussions'
      ],
      technologies: [
        'Python',
        'Java',
        'Node.js',
        'TypeScript',
        'REST APIs',
        'GraphQL',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'Docker',
        'GitHub Actions'
      ],
      link: 'https://touwi.fr'
    }
  ];

  return (
    <section
      id="experience"
      className="py-20 lg:py-32 bg-background-secondary"
    >
      <div className="container mx-auto px-6">
        <div className="space-y-16">

          {/* Section header */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-primary font-mono text-lg">
              02. Where I've Worked
            </h2>

            <h3 className="text-4xl lg:text-5xl font-bold text-foreground">
              Professional Journey
            </h3>

            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Building software, cloud infrastructure, and reliable systems
              across product and engineering environments.
            </p>
          </div>

          {/* Experience timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={`${exp.company}-${exp.role}`}
                className="glass border-card-border hover:border-primary/30 transition-all duration-500 fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8 lg:p-10">
                  <div className="grid lg:grid-cols-12 gap-8">

                    {/* Left side - Company info */}
                    <div className="lg:col-span-4 space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <h4 className="text-2xl font-bold text-foreground">
                            {exp.company}
                          </h4>

                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground-muted hover:text-primary transition-colors"
                            aria-label={`Visit ${exp.company}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>

                        <h5 className="text-lg font-semibold text-primary">
                          {exp.role}
                        </h5>

                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant="outline"
                              className="border-primary/30 text-primary text-xs"
                            >
                              {exp.type}
                            </Badge>
                          </div>

                          <div className="text-foreground-muted text-sm">
                            {exp.period}
                          </div>

                          <div className="text-foreground-muted text-sm">
                            📍 {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Impact Metrics - shown only when real metrics exist */}
                      {exp.impact && (
                        <div className="space-y-3">
                          <h6 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                            Key Impact
                          </h6>

                          <div className="grid grid-cols-1 gap-2">
                            {Object.entries(exp.impact).map(([key, value]) => (
                              <div
                                key={key}
                                className="flex items-center justify-between p-2 bg-primary/5 rounded-lg"
                              >
                                <span className="text-foreground-muted text-xs">
                                  {key === 'devices'
                                    ? 'IoT Devices'
                                    : key === 'efficiency'
                                      ? 'Manual Work Reduced'
                                      : key === 'automation'
                                        ? 'IaC Coverage'
                                        : key}
                                </span>

                                <span className="text-primary font-bold text-sm">
                                  {value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

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
                          <li
                            key={i}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />

                            <span className="text-foreground-muted leading-relaxed">
                              {item}
                            </span>
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