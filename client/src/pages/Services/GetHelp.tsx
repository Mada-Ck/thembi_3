import React from 'react';
import { Link } from 'wouter';
import Base from '../../components/layout/Base';
import ServicesSidebar from '../../components/layout/ServicesSidebar';
import { HelpCircle, Phone, Mail, MapPin, HeartHandshake, UserPlus, Share2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const GetHelp: React.FC = () => {
  const waysToHelp = [
    {
      icon: UserPlus,
      title: "Volunteer",
      description: "Join our community outreach teams and make a direct impact.",
      href: "/volunteer"
    },
    {
      icon: HeartHandshake,
      title: "Donate",
      description: "Provide essential resources for those affected by HIV/AIDS.",
      href: "/donate"
    },
    {
      icon: Share2,
      title: "Spread Awareness",
      description: "Share our resources to educate and reduce community stigma.",
      href: "/about-hiv"
    }
  ];

  return (
    <Base>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4">
            <ServicesSidebar />
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-16">
            {/* Header Section */}
            <section className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                <HelpCircle className="w-3 h-3" />
                Support Center
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">How can we <span className="text-primary italic">help</span> you today?</h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Welcome to the TCI Help Center. Whether you are looking for medical support, specialized counseling, or ways to give back, we are here for you.
              </p>
            </section>

            {/* Involvement Grid */}
            <section className="bg-muted/30 rounded-[3rem] p-8 md:p-12 border border-border">
              <div className="mb-10 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">Get Involved</h2>
                <p className="text-muted-foreground">Join our mission to empower the Thembi community.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {waysToHelp.map((way, i) => (
                  <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow group">
                    <CardContent className="p-8 space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <way.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{way.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {way.description}
                      </p>
                      <Link href={way.href}>
                        <Button variant="ghost" className="p-0 h-auto hover:bg-transparent font-bold text-primary group-hover:translate-x-1 transition-transform">
                          Learn more <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">Contact Us</h2>
                  <p className="text-muted-foreground">Our team is ready to listen and assist.</p>
                </div>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "info@thembi.org" },
                    { icon: Phone, label: "Phone (Malawi Office)", value: "+265 123 456 789" },
                    { icon: MapPin, label: "Office", value: "Chitipa District, Northern Malawi" }
                  ].map((info, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-tighter">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="aspect-square md:aspect-auto md:h-full bg-muted rounded-[3rem] border border-border overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1524660988544-2fd78d1c4791?auto=format&fit=crop&q=80&w=800"
                  alt="Chitipa Landscape"
                  className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                  <div className="bg-background/80 backdrop-blur-md p-6 rounded-2xl border border-border text-sm font-medium">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    Located in the heart of<br />the Thembi Community
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default GetHelp;
