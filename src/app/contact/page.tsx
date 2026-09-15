
"use client";
import ContactForm from '@/components/contact/ContactForm';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { motion } from 'framer-motion';

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <motion.header {...sectionAnimationProps} className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">Contact Me</h1>
        <p className="text-xl text-muted-foreground">Let's Connect and Create Something Amazing</p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div 
          {...sectionAnimationProps} 
          transition={{ ...sectionAnimationProps.transition, delay: 0.2 }} 
          className="md:col-span-2"
        >
          <ContactForm />
        </motion.div>
        <motion.aside 
          {...sectionAnimationProps} 
          transition={{ ...sectionAnimationProps.transition, delay: 0.4 }} 
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-headline mb-4 text-primary">Connect with Me</h2>
            <p className="text-muted-foreground mb-6">
              You can also find me on these platforms:
            </p>
            <div className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary/10">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-3 h-5 w-5" /> GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary/10">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-3 h-5 w-5" /> LinkedIn
                </a>
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary/10">
                    <Mail className="mr-3 h-5 w-5" /> Email
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-2" side="bottom" align="start">
                  <a href={SOCIAL_LINKS.email} className="text-sm text-accent hover:underline">
                    {SOCIAL_LINKS.email.replace('mailto:', '')}
                  </a>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-headline mb-3 text-primary">Availability</h3>
            <p className="text-muted-foreground">
              I'm generally available for interesting projects and collaborations. Feel free to reach out if you think we could work together or if you have a compelling idea to discuss.
            </p>
          </div>
        </motion.aside>
      </div>
    </div>
  );
};

export default ContactPage;
    
