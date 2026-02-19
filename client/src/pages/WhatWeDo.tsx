import { Link } from "wouter";
import {
  AlertTriangle,
  Users,
  Globe,
  ShieldCheck,
  UserCheck,
  Droplets,
  ArrowRight,
  Mail
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Base from "@/components/layout/Base";

export default function WhatWeDo() {
  const programs = [
    {
      icon: AlertTriangle,
      title: "Emergency Services & Disasters",
      description: "Building resilient communities to handle disasters and climate emergencies.",
      details: "We strengthen community preparedness and recovery through training, resources, and rapid response initiatives."
    },
    {
      icon: Users,
      title: "Migration Support",
      description: "Creating safe, inclusive spaces for migrants to thrive.",
      details: "We provide humanitarian aid, legal support, and integration programs for migrants."
    },
    {
      icon: Globe,
      title: "Community Programs",
      description: "Fostering connection and resilience through local initiatives.",
      details: "Volunteering opportunities and tailored programs address local humanitarian needs."
    },
    {
      icon: ShieldCheck,
      title: "International Programs",
      description: "Enhancing global resilience against crises and climate change.",
      details: "We partner with international communities to build capacity and recovery systems."
    },
    {
      icon: UserCheck,
      title: "International Humanitarian Law",
      description: "Improving outcomes in conflict-affected regions.",
      details: "We advocate for adherence to humanitarian laws to protect vulnerable populations."
    },
    {
      icon: Droplets,
      title: "Lifeblood",
      description: "Boosting blood and plasma supplies for emergencies and treatments.",
      details: "We enhance collection and distribution to improve patient outcomes."
    }
  ];

  return (
    <Base>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/what-we-do-hero.jpg"
            alt="What We Do Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 text-center text-white animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">What We Do</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Delivering impactful solutions locally and globally to empower communities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <h3 className="text-xl font-bold border-b pb-2">In this section</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
                <Link href="/what-we-do" className="text-primary font-bold">What We Do</Link>
                <Link href="/governance" className="text-muted-foreground hover:text-primary transition-colors">Governance</Link>
              </nav>
            </div>
          </aside>

          {/* Content Area */}
          <main className="lg:col-span-3">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed">
                With over a century of experience and a dedicated community of 16,000+ members and volunteers,
                Thembi Community Initiative acts locally and connects globally to deliver critical support
                when it's needed most.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-8">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs.map((program, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-primary/5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <program.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="details" className="border-none">
                        <AccordionTrigger className="py-0 hover:no-underline text-primary text-sm font-medium">
                          Learn How We Do It
                        </AccordionTrigger>
                        <AccordionContent className="pt-4 text-sm text-muted-foreground">
                          {program.details}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="bg-card rounded-2xl overflow-hidden shadow-xl flex flex-col md:row-reverse md:flex-row">
            <div className="md:w-1/2">
              <img
                src="/images/everyone-always.jpg"
                alt="Community Support"
                className="w-full h-full object-cover min-h-[300px]"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4">There When They Need Us</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Help us support communities in rebuilding and thriving.
              </p>
              <Link href="/donate">
                <Button size="lg" className="w-fit">
                  Donate Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-16 border-t">
        <div className="container max-w-2xl text-center">
          <div className="mb-8">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">Stay Connected</h2>
            <p className="text-muted-foreground">
              Subscribe to receive updates on our work and ways to get involved.
            </p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="First Name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Last Name" required />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@example.com" required />
            </div>
            <Button className="md:col-span-2 py-6 text-lg">Subscribe</Button>
          </form>
          <p className="mt-6 text-xs text-muted-foreground">
            We respect your privacy. Learn more in our{" "}
            <Link href="/privacy" className="underline">Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </Base>
  );
}

