import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@alexrodriguez.dev',
      href: 'mailto:hello@alexrodriguez.dev'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left side - Contact form */}
            <Card className="glass border-card-border fade-in-left">
              <div className="p-8">
                <h4 className="text-2xl font-bold text-foreground mb-6">Send a Message</h4>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        First Name
                      </label>
                      <Input 
                        placeholder="John"
                        className="bg-background border-border focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Doe"
                        className="bg-background border-border focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="john@example.com"
                      className="bg-background border-border focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Input 
                      placeholder="Let's work together!"
                      className="bg-background border-border focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-background border-border focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-primary"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </Card>

            {/* Right side - Contact info and CTA */}
            <div className="space-y-8 fade-in-right">
              {/* Contact information */}
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-foreground">Let's Connect</h4>
                <p className="text-foreground-muted leading-relaxed">
                  I'm currently open to new opportunities and interesting projects. 
                  If you think we'd be a good fit, I'd love to hear from you.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-foreground-muted">{info.label}</div>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-foreground hover:text-primary transition-colors animated-underline"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-foreground">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick contact CTA */}
              <Card className="glass border-card-border">
                <div className="p-6 text-center space-y-4">
                  <h5 className="text-xl font-bold text-foreground">Prefer Email?</h5>
                  <p className="text-foreground-muted text-sm">
                    Send me a direct email and I'll get back to you within 24 hours.
                  </p>
                  <Button 
                    variant="outline"
                    className="border-foreground-muted text-foreground-muted hover:border-primary hover:text-primary transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:hello@alexrodriguez.dev">
                      <Mail className="mr-2 h-4 w-4" />
                      Say Hello
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Availability status */}
              <Card className="glass border-card-border">
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <h5 className="text-lg font-bold text-foreground">Currently Available</h5>
                  </div>
                  <p className="text-foreground-muted text-sm">
                    I'm actively looking for new opportunities and freelance projects. 
                    Open to full-time, contract, and consulting work.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Full-time</span>
                    <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Contract</span>
                    <span className="text-xs bg-primary-glow/20 text-primary-glow px-2 py-1 rounded">Consulting</span>
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