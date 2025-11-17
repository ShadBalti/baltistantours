import { Heart, MapPin, Mail, Phone } from 'lucide-react';
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-muted/50 backdrop-blur supports-[backdrop-filter]:bg-muted/50 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">Baltistan Tourism</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your complete guide to the Roof of the World
            </p>
            <div className="flex gap-4 text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                <span className="sr-only">Facebook</span>
                <Heart className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/destinations" className="text-muted-foreground hover:text-foreground transition-colors">Destinations</Link></li>
              <li><Link href="/blogs" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/travel-essentials" className="text-muted-foreground hover:text-foreground transition-colors">Travel Essentials</Link></li>
              <li><Link href="/tips" className="text-muted-foreground hover:text-foreground transition-colors">Tips & Tricks</Link></li>
              <li><Link href="/language" className="text-muted-foreground hover:text-foreground transition-colors">Language</Link></li>
              <li><Link href="/food" className="text-muted-foreground hover:text-foreground transition-colors">Food Guide</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground">Skardu, Baltistan, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@baltistantours.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  info@baltistantours.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+923000000000" className="text-muted-foreground hover:text-foreground transition-colors">
                  +92 300 0000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Baltistan Tourism. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}