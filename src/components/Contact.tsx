import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'elaggounaref.business@gmail.com',
      href: 'mailto:elaggounaref.business@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+33 7 58 65 60 54 ',
    },
    {
      icon: MapPin,
      label: 'Current Location',
      value: 'France',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center space-y-4 mb-16 fade-in">
            <h2 className="text-primary font-mono text-lg">04. What's Next?</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground">
              Get In Touch
            </h3>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to chat about tech, 
              feel free to reach out!
            </p>
          </div>

          {/* Contact info and CTA - Enhanced Design */}
          <div className="max-w-4xl mx-auto space-y-12 fade-in">
            {/* Hero Contact Section */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-primary font-mono text-sm">Available for opportunities</span>
              </div>
              
              <h4 className="text-3xl lg:text-4xl font-bold text-foreground">
                Let's Build Something 
                <span className="text-primary"> Amazing Together</span>
              </h4>
              
              <p className="text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
                Ready to turn your ideas into reality? I'm passionate about creating innovative solutions 
                that make a difference. Let's start the conversation.
              </p>
            </div>

            {/* Interactive Contact Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={info.label} className="glass border-card-border hover:border-primary/30 transition-all duration-500 group">
                  <div className="p-6 text-center space-y-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                    </div>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-foreground text-lg">{info.label}</h5>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="block text-foreground-muted hover:text-primary transition-colors duration-300 group-hover:text-primary text-sm leading-relaxed"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground-muted text-sm leading-relaxed">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Main CTA Section */}
            <div className="relative">
              <Card className="glass border-card-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
                <div className="relative p-8 lg:p-12 text-center space-y-8">
                  <div className="space-y-4">
                    <h5 className="text-2xl lg:text-3xl font-bold text-foreground">
                      Ready to Start Your Next Project?
                    </h5>
                    <p className="text-foreground-muted max-w-lg mx-auto">
                      Whether it's a groundbreaking startup idea, enterprise solution, or innovative experiment – 
                      I'm here to help bring your vision to life.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                      size="lg"
                      className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-primary group px-8 py-3"
                      asChild
                    >
                      <a href="mailto:elaggounaref.business@gmail.com">
                        <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                        Let's Talk
                      </a>
                    </Button>
                    
                    <div className="flex items-center space-x-2 text-foreground-muted text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span>Usually responds within 24 hours</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Skills & Availability Showcase */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Expertise Areas */}
              <Card className="glass border-card-border">
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">⚡</span>
                    </div>
                    <h5 className="text-xl font-bold text-foreground">What I Bring</h5>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Software Engineering',
                      'AI & Machine Learning',
                      'Cloud & DevOps',
                      'Cyber Security',
                      'Data Engineering',
                      'System Design'
                    ].map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-foreground-muted text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Work Preferences */}
              <Card className="glass border-card-border">
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <h5 className="text-xl font-bold text-foreground">Currently Available</h5>
                  </div>
                  
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    Open to exciting opportunities that challenge conventional thinking and create meaningful impact.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: 'Full-time', color: 'bg-primary/20 text-primary' },
                      { label: 'Contract', color: 'bg-blue-500/20 text-blue-400' },
                      { label: 'Consulting', color: 'bg-purple-500/20 text-purple-400' },
                      { label: 'Remote', color: 'bg-green-500/20 text-green-400' }
                    ].map((item) => (
                      <span key={item.label} className={`text-xs px-3 py-1.5 rounded-full font-medium ${item.color}`}>
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;