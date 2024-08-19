import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <footer className="relative w-full max-w-4xl mx-auto pt-2 px-2 pb-28 ">
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
          <form className="grid gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={5} placeholder="Your message" />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
