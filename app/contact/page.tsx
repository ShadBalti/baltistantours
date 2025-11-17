import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Baltistan Tourism Guide team.",
};

export const dynamic = 'force-static';
export const revalidate = 86400;

export default function Contact() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          Have questions? We'd love to hear from you. Get in touch with our team.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="border-2 hover-scale">
          <CardContent className="pt-8 text-center">
            <div className="p-4 rounded-2xl bg-primary/10 inline-block mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-muted-foreground text-sm mb-3">info@baltistantouring.com</p>
            <p className="text-xs text-muted-foreground">We respond within 24 hours</p>
          </CardContent>
        </Card>

        <Card className="border-2 hover-scale">
          <CardContent className="pt-8 text-center">
            <div className="p-4 rounded-2xl bg-accent/10 inline-block mb-4">
              <Phone className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p className="text-muted-foreground text-sm mb-3">+92 5815-931-xxx</p>
            <p className="text-xs text-muted-foreground">Available Mon-Fri 9am-5pm</p>
          </CardContent>
        </Card>

        <Card className="border-2 hover-scale">
          <CardContent className="pt-8 text-center">
            <div className="p-4 rounded-2xl bg-secondary/10 inline-block mb-4">
              <MapPin className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Location</h3>
            <p className="text-muted-foreground text-sm mb-3">Skardu, Baltistan</p>
            <p className="text-xs text-muted-foreground">Serving travelers worldwide</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2">
        <CardContent className="pt-8">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold mb-2 block">Name</label>
                <Input placeholder="Your full name" className="border-2" />
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block">Email</label>
                <Input type="email" placeholder="your@email.com" className="border-2" />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold mb-2 block">Subject</label>
              <Input placeholder="What is this about?" className="border-2" />
            </div>
            <div>
              <label className="text-sm font-semibold mb-2 block">Message</label>
              <Textarea placeholder="Tell us your questions or feedback..." className="border-2 min-h-32" />
            </div>
            <Button size="lg" className="w-full md:w-auto bg-gradient-to-r from-primary to-primary/90 hover-scale">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
