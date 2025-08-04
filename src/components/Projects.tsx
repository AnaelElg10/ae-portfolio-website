import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Bug Hawk',
      description: 'A production-grade SaaS bug tracking system for teams to report, manage, assign, and resolve software issues. Think Trello + Jira, but lightweight and DevSecOps-compliant.',
      longDescription: 'Built with Typescript, React, and NestJS, Bug Hawk features a modular architecture, real-time collaboration tools, and seamless integration with popular CI/CD pipelines.',
      technologies: ['Typescript', 'React', 'Docker', 'NestJS', 'PostgreSQL', 'Docker', 'AWS'],
      github: 'https://github.com/AnaelElg10/bug-hawk',
      featured: true,
      image: '../img/bughawk.png',
    },
    {
      title: 'EcoVision AI',
      description: 'An advanced environmental monitoring and prediction system that combines computer vision, time series forecasting, and reinforcement learning to analyze satellite imagery and predict environmental changes.',
      longDescription: 'EcoVision AI is an advanced environmental monitoring and prediction system that combines cutting-edge computer vision, time series forecasting, and reinforcement learning to analyze satellite imagery, predict environmental changes, and optimize conservation strategies. The system provides real-time insights into deforestation, climate patterns, and biodiversity changes.',
      technologies: ['Python', 'TensorFlow & Pytorch', 'FastAPI', 'Hugging Face Transformers', 'Docker', 'Apache Spark', 'AWS', 'MLOps & Infrastructure'],
      github: 'https://github.com/AnaelElg10/Intelligent-Environmental-Monitoring-And-Prediction-System',
      featured: true,
      image: '../img/EcoAI.png'
    },
    {
      title: 'Global SmartCity Data Platform',
      description: 'An enterprise-grade, cloud-native solution that ingests, processes, analyzes, and visualizes real-time and historical data from multiple cities worldwide.',
      longDescription: 'The Global SmartCity Data Platform is an enterprise-grade, cloud-native solution that ingests, processes, analyzes, and visualizes real-time and historical data from multiple cities worldwide. It demonstrates advanced data engineering patterns, big data processing, machine learning, and modern DevOps practices.',
      technologies: ['Apache Kafka & Spark', 'AWS', 'PostgreSQL', 'Scikit-learn & XGBoost', 'Kubernetes'],
      github: 'https://github.com/AnaelElg10/Global-SmartCity-Data-Platform',
      featured: true,
      image: '../img/GlobalSmartCity.png'
    },
    {
      title: 'CryptoPortfolio',
      description: 'Real-time cryptocurrency portfolio tracker with advanced analytics and automated trading features.',
      technologies: ['React', 'WebSocket', 'Python', 'Flask', 'Chart.js'],
      github: 'https://github.com/alexrodriguez/cryptoportfolio',
      live: 'https://cryptoportfolio-demo.com',
      featured: false
    },
    {
      title: 'Recipe Finder',
      description: 'Smart recipe recommendation app using machine learning to suggest meals based on available ingredients.',
      technologies: ['React Native', 'TensorFlow.js', 'Firebase', 'Node.js'],
      github: 'https://github.com/alexrodriguez/recipe-finder',
      live: 'https://recipe-finder-app.com',
      featured: false
    },
    {
      title: 'Workout Planner',
      description: 'Personalized fitness planning application with exercise tracking and progress visualization.',
      technologies: ['Vue.js', 'Nuxt.js', 'Supabase', 'Chart.js'],
      github: 'https://github.com/alexrodriguez/workout-planner',
      live: 'https://workout-planner-demo.com',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="space-y-20">
          {/* Section header */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-primary font-mono text-lg">03. Some Things I've Built</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground">
              Featured Projects
            </h3>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for creating meaningful digital experiences.
            </p>
          </div>

          {/* Featured projects */}
          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.title}
                className={`grid lg:grid-cols-12 gap-8 items-center fade-in-up ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project image */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                  <div className="relative group">
                    <div className="bg-gradient-card rounded-xl overflow-hidden shadow-elevated">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <div className="text-6xl text-foreground-muted opacity-20">
                          {project.title.charAt(0)}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </div>
                </div>

                {/* Project details */}
                <div className={`lg:col-span-5 space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:text-right' : ''}`}>
                  <div className="space-y-2">
                    <p className="text-primary font-mono text-sm">Featured Project</p>
                    <h4 className="text-3xl font-bold text-foreground">{project.title}</h4>
                  </div>

                  <div className="glass rounded-lg p-6 space-y-4">
                    <p className="text-foreground-muted leading-relaxed">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="border-primary/30 text-foreground-secondary hover:border-primary hover:text-primary transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className={`flex space-x-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-foreground-muted hover:text-primary"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-foreground-muted hover:text-primary"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other projects */}
          <div className="space-y-8">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-foreground mb-4">Other Noteworthy Projects</h4>
              <p className="text-foreground-muted">A collection of additional projects and experiments</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="glass border-card-border hover:border-primary/30 transition-all duration-500 group fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-bold">{project.title.charAt(0)}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-foreground-muted hover:text-primary"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-foreground-muted hover:text-primary"
                          asChild
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div className="flex-1 space-y-4">
                      <h5 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h5>
                      <p className="text-foreground-muted text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge 
                          key={tech}
                          variant="outline"
                          className="border-primary/30 text-foreground-secondary text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge 
                          variant="outline"
                          className="border-primary/30 text-foreground-secondary text-xs"
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
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
