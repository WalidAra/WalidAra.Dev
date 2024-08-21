import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useRef, useState } from "react";

const Contact = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const [isSent, setIsSent] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSent(true);
    const name = encodeURIComponent(nameRef.current?.value || "");
    const email = encodeURIComponent(emailRef.current?.value || "");
    const message = encodeURIComponent(messageRef.current?.value || "");

    const mailtoLink = `mailto:arawalid90@gmail.com?subject=Dev%20Talk&body=Name%3A%20${name}%0AEmail%3A%20${email}%0AMessage%3A%20${message}`;
    
    window.location.href = mailtoLink;

    setIsSent(false);
  };

  return (
    <footer id="contact" className="relative w-full pt-2 sm:px-2 sm:pb-28 ">
      <div className="container grid max-w-4xl items-center justify-center gap-8 px-4 md:px-6">
        <div className="space-y-2 w-full text-center m-auto">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Contacts
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get in Touch
          </h2>
          <p className="text-muted-foreground w-[70%] m-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a question or want to work together? Fill out the form below or
            reach out on social media.
          </p>
        </div>
        <div className="grid w-full gap-6">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  ref={nameRef}
                  id="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  ref={emailRef}
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                ref={messageRef}
                id="message"
                rows={5}
                placeholder="Your message"
                required
              />
            </div>
            <div className="w-full flex ">
              <Button type="submit" className="w-full sm:w-auto">
                {isSent ? "Message Sent" : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
