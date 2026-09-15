
"use client";
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label'; // Using ShadCN Label directly
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Send, Loader2, CheckCircle } from 'lucide-react';

const FORMSPREE_FORM_ID = "mldnjqqn";

const ContactForm = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);
  const [reasonValue, setReasonValue] = useState('');

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message Sent!",
        description: "Thank you! I’ll get back to you soon.",
        variant: "default",
      });
      setReasonValue(''); // Reset select value
      // The form itself will be replaced by the success message, so fields are effectively "reset"
    } else if (state.errors && (state.errors as unknown[]).length > 0 && !state.submitting) {
      // Check for general form errors (not field-specific, as ValidationError handles those)
      const generalError = (state.errors as {field?: string, message?: string}[]).find(err => !err.field);
      if (generalError) {
         toast({
          title: "Submission Error",
          description: generalError.message || "An unexpected error occurred. Please try again.",
          variant: "destructive",
        });
      } else {
        // If only field errors, ValidationError components will display them.
        // Optionally, show a generic hint if specific field errors are present.
        toast({
          title: "Validation Error",
          description: "Please check the form for errors and try again.",
          variant: "destructive",
        });
      }
    }
  }, [state.succeeded, state.errors, state.submitting, toast]);


  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl border-border">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-headline text-primary">Get In Touch</CardTitle>
        <CardDescription className="text-muted-foreground">
          Have a question, a project idea, or just want to connect? Drop me a line.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          {state.succeeded ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-10"
            >
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
              <p className="text-muted-foreground">Your message has been sent successfully. I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" required className="bg-input border-input-border focus:border-primary" />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm font-medium text-destructive" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" name="email" placeholder="your.email@example.com" required className="bg-input border-input-border focus:border-primary" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm font-medium text-destructive" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason-select">Reason for Contact</Label>
                  <Select onValueChange={setReasonValue} value={reasonValue} name="reason_select_trigger">
                    {/* The 'name' attribute on Select or SelectTrigger itself is not standard for form submission.
                        We use a hidden input below to capture the 'reason'. */}
                    <SelectTrigger id="reason-select" className="bg-input border-input-border focus:border-primary">
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover text-popover-foreground border-border">
                      <SelectItem value="collaboration">Collaboration/Project Inquiry</SelectItem>
                      <SelectItem value="research">Research Discussion</SelectItem>
                      <SelectItem value="mentorship">Mentorship/Guidance</SelectItem>
                      <SelectItem value="general">General Question/Feedback</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="reason" value={reasonValue} />
                  {/* Formspree requires a named field; if 'reason' is required, a ValidationError can be added.
                      However, if the select must have a value, it's better to handle that validation client-side
                      if not relying on Formspree's backend validation for it. For now, Formspree will get 'reason'. */}
                  <ValidationError prefix="Reason" field="reason" errors={state.errors} className="text-sm font-medium text-destructive" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." rows={5} required className="bg-input border-input-border focus:border-primary" />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm font-medium text-destructive" />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={state.submitting}>
                  {state.submitting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-4 w-4" />
                  )}
                  Send Message
                </Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
