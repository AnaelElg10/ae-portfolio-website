import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Bug Hawk',
      description:
        'A full-stack issue tracking platform for teams to report, organize, assign, and resolve software issues.',
      longDescription:
        'Bug Hawk is a full-stack issue tracking platform built to explore modern software architecture, DevOps practices, and team collaboration workflows. It combines a React and TypeScript frontend with a NestJS backend, PostgreSQL persistence, containerization, and cloud-oriented deployment practices.',
      technologies: [
        'TypeScript',
        'React',
        'NestJS',
        'PostgreSQL',
        'Docker',
        'AWS'
      ],
      github: 'https://github.com/AnaelElg10/bug-hawk',
      featured: true,
      image: '/images/bughawk.png'
    },
    {
      title: 'EcoVision AI',
      description:
        'An environmental monitoring and prediction project combining machine learning, computer vision, data processing, and cloud technologies.',
      longDescription:
        'EcoVision AI explores environmental monitoring through machine learning and data engineering. The project combines computer vision, forecasting, data processing, and API development to analyze environmental data and experiment with predictions around changes such as vegetation, climate patterns, and biodiversity.',
      technologies: [
        'Python',
        'PyTorch',
        'TensorFlow',
        'FastAPI',
        'Hugging Face',
        'Apache Spark',
        'Docker',
        'AWS'
      ],
      github: 'https://github.com/AnaelElg10/eco-ai',
      featured: true,
      image: '/images/EcoAI.png'
    },
    {
      title: 'Global SmartCity Data Platform',
      description:
        'A cloud-oriented data platform for ingesting, processing, analyzing, and visualizing data from smart-city environments.',
      longDescription:
        'The Global SmartCity Data Platform explores modern data engineering and distributed processing patterns. It brings together streaming data, large-scale processing, databases, machine learning, container orchestration, and cloud infrastructure in a single end-to-end project.',
      technologies: [
        'Apache Kafka',
        'Apache Spark',
        'AWS',
        'PostgreSQL',
        'Scikit-learn',
        'XGBoost',
        'Kubernetes'
      ],
      github: 'https://github.com/AnaelElg10/gsdp',
      featured: true,
      image: '/images/GlobalSmartCity.png'
    },
    {
      title: 'IdentiFi — Blockchain & Smart Contracts',
      description:
        'A decentralized identity verification project exploring blockchain-based authentication and smart contracts.',
      technologies: [
        'TypeScript',
        'Solidity',
        'Ethereum',
        'Web3.js',
        'CSS'
      ],
      github: 'https://github.com/AnaelElg10/Blockchain-SmartContracts',
      live: 'https://identifi-with-blockchain.vercel.app/',
      featured: false,
      image: '/images/IdentiFi.png'
    },
    {
      title: 'Interactive Data Visualization',
      description:
        'An interactive application for exploring and visualizing complex datasets through web-based data visualizations.',
      technologies: [
        'D3.js',
        'Node.js',
        'GraphQL',
        'MongoDB',
        'Docker',
        'CSS'
      ],
      github: 'https://github.com/AnaelElg10/Interactive-Data-Visualization',
      featured: false,
      image: '/images/interactive-data.png'
    },
    {
      title: 'DDoS Attack Simulation',
      description:
        'A cybersecurity lab project for simulating denial-of-service scenarios and studying the resilience of containerized web infrastructure.',
      technologies: [
        'Docker',
        'Docker Compose',
        'Bash',
        'Apache',
        'Nginx',
        'hping3'
      ],
      github: 'https://github.com/AnaelElg10/AttackDDoS',
      featured: false,
      image: '/images/ddos_attack_simulation_dashboard.png'
    }
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          {/* Section header */}
          <div className="text-center space-y-3 fade-in">
            <h2 className="text-primary font-mono text-lg">
              03. Some Things I've Built
            </h2>

            <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
              Featured Projects
            </h3>

            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Projects across software engineering, cloud, DevOps,
              cybersecurity, data, and AI that reflect how I learn,
              experiment, and build across different technical domains.
            </p>
          </div>

          {/* Featured projects */}
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`grid lg:grid-cols-12 gap-6 items-center fade-in-up ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project image */}
                <div
                  className={`lg:col-span-6 ${
                    index % 2 === 1 ? 'lg:col-start-7' : ''
                  }`}
                >
                  <div className="relative group">
                    <div className="bg-gradient-card rounded-lg overflow-hidden shadow-elevated">
                      <div className="aspect-video bg-muted relative">
                        <img
                          src={project.image}
                          alt={`${project.title} project preview`}
                          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  </div>
                </div>

                {/* Project details */}
                <div
                  className={`lg:col-span-6 space-y-4 ${
                    index % 2 === 1
                      ? 'lg:col-start-1 lg:text-right'
                      : ''
                  }`}
                >
                  <div className="space-y-1">
                    <p className="text-primary font-mono text-sm">
                      Featured Project
                    </p>

                    <h4 className="text-2xl lg:text-3xl font-bold text-foreground">
                      {project.title}
                    </h4>
                  </div>

                  <div className="glass rounded-lg p-4 space-y-3">
                    <p className="text-foreground-muted leading-relaxed text-sm">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 1 ? 'lg:justify-end' : ''
                    }`}
                  >
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-primary/30 text-foreground-secondary hover:border-primary hover:text-primary transition-all duration-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div
                    className={`flex space-x-3 ${
                      index % 2 === 1 ? 'lg:justify-end' : ''
                    }`}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-foreground-muted hover:text-primary"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>

                    {project.live && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-foreground-muted hover:text-primary"
                        asChild
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} live`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other projects */}
          <div className="space-y-8">
            <div className="text-center space-y-3">
              <h4 className="text-2xl lg:text-3xl font-bold text-foreground">
                Other Noteworthy Projects
              </h4>

              <p className="text-foreground-muted max-w-xl mx-auto">
                Additional projects exploring cybersecurity, blockchain,
                data visualization, and software engineering.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card
                  key={project.title}
                  className="glass border-card-border hover:border-primary/30 transition-all duration-500 group fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project image */}
                  <div className="aspect-video bg-muted overflow-hidden rounded-t-lg relative">
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-4 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">
                          {project.title.charAt(0)}
                        </span>
                      </div>

                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-foreground-muted hover:text-primary"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>

                        {project.live && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-foreground-muted hover:text-primary"
                            asChild
                          >
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${project.title} live`}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3 flex-1">
                      <h5 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h5>

                      <p className="text-foreground-muted text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 pt-1">
                        {project.technologies
                          .slice(0, 4)
                          .map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-primary/30 text-foreground-secondary hover:border-primary hover:text-primary transition-all duration-300 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}

                        {project.technologies.length > 4 && (
                          <Badge
                            variant="outline"
                            className="border-primary/30 text-foreground-secondary hover:border-primary hover:text-primary transition-all duration-300 text-xs"
                          >
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;