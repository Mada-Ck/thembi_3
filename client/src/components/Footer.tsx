import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background mt-16">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Organization Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/images/thembi-logo.png"
                alt="Thembi Community Initiative Logo"
                className="h-10 w-auto brightness-0 invert"
              />
              <h3 className="text-lg font-bold">Thembi</h3>
            </div>
            <p className="text-sm text-background/80 mb-4">
              Empowering communities in Chitipa, Malawi through health, education, and youth programs.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Chitipa, Malawi</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>+265 1 234 5678 (Malawi Office)</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>info@thembi.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-secondary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="hover:text-secondary transition-smooth">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="hover:text-secondary transition-smooth">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-secondary transition-smooth">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-smooth">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold mb-4">Our Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/health" className="hover:text-secondary transition-smooth">
                  Health
                </Link>
              </li>
              <li>
                <Link href="/education" className="hover:text-secondary transition-smooth">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/livelihood" className="hover:text-secondary transition-smooth">
                  Livelihood
                </Link>
              </li>
              <li>
                <Link href="/youth-empowerment" className="hover:text-secondary transition-smooth">
                  Youth Empowerment
                </Link>
              </li>
              <li>
                <Link href="/community-empowerment" className="hover:text-secondary transition-smooth">
                  Community Empowerment
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://facebook.com/thembi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary rounded-lg hover:bg-secondary transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/thembi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary rounded-lg hover:bg-secondary transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/thembi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary rounded-lg hover:bg-secondary transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/thembi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary rounded-lg hover:bg-secondary transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-background/10 rounded-lg p-4">
              <p className="text-sm font-medium mb-2">Subscribe to our newsletter</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded bg-background text-foreground text-sm placeholder-muted-foreground"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded font-medium text-sm hover:bg-secondary/90 transition-smooth"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-background/80 mb-6">
            <div>
              <p className="font-medium mb-2">Legal</p>
              <div className="space-y-1">
                <Link href="/privacy" className="hover:text-secondary transition-smooth block">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-secondary transition-smooth block">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div>
              <p className="font-medium mb-2">Organization</p>
              <div className="space-y-1">
                <Link href="/governance" className="hover:text-secondary transition-smooth block">
                  Governance
                </Link>
                <Link href="/board-members" className="hover:text-secondary transition-smooth block">
                  Board Members
                </Link>
              </div>
            </div>
            <div>
              <p className="font-medium mb-2">Resources</p>
              <div className="space-y-1">
                <Link href="/about-hiv" className="hover:text-secondary transition-smooth block">
                  HIV Information
                </Link>
                <Link href="/resources" className="hover:text-secondary transition-smooth block">
                  Resources
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-background/20 pt-6 text-center text-sm text-background/70">
            <p>
              © {currentYear} Thembi Community Initiative. All rights reserved. | Empowering communities through compassion and action.
            </p>
            <p className="mt-2">
              Registered as a non-profit organization in Malawi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
