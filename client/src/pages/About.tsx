import { Link } from "wouter";
import { CheckCircle, Users, Target, Heart, Zap, Shield, ThumbsUp, Globe, BookOpen, Stethoscope, Users2, ShieldCheck, Landmark } from "lucide-react";
import Base from "@/components/layout/Base";
import AboutSidebar from "@/components/layout/AboutSidebar";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Committed to our calling and service to humanity, driven by compassion in all we do.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously learning and adapting to transform communities through creative solutions.",
    },
    {
      icon: Users,
      title: "Empowerment",
      description: "Enabling communities and staff to shape their own futures and lead sustainable change.",
    },
    {
      icon: Shield,
      title: "Stewardship",
      description: "Acting as responsible channels of resources with transparency and accountability.",
    },
    {
      icon: ThumbsUp,
      title: "Control",
      description: "Encouraging communities to take the lead in their development journey.",
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "Operating with transparency, accountability, and the highest ethical standards.",
    },
    {
      icon: Target,
      title: "Impact",
      description: "Focusing on measurable, sustainable change that transforms lives for the better.",
    },
  ];

  const objectives = [
    {
      icon: ShieldCheck,
      text: "Ensure rights and support for children with HIV/AIDS and disabilities.",
    },
    {
      icon: Stethoscope,
      text: "Provide treatment and care for children living with HIV/AIDS.",
    },
    {
      icon: Users2,
      text: "Reduce stigma and promote inclusion for those with HIV/AIDS.",
    },
    {
      icon: BookOpen,
      text: "Offer educational opportunities to young people.",
    },
    {
      icon: Globe,
      text: "Enhance understanding of Sexual and Reproductive Health Rights (SRHR).",
    },
    {
      icon: Landmark,
      text: "Facilitate socio-economic skills for vulnerable communities.",
    },
    {
      icon: Users,
      text: "Empower rural communities to meet their own needs.",
    },
  ];

  return (
    <Base>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              About Thembi Community Initiative
            </h1>
            <p className="text-xl text-primary-foreground/90">
              A Promise of Hope - Empowering communities in Chitipa, Malawi through health, education, and youth programs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <AboutSidebar />
          </aside>

          {/* Content Area */}
          <main className="lg:col-span-3">
            {/* Mission & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Thembi Community Initiative is dedicated to transforming lives and strengthening communities in Chitipa, Malawi. We work collaboratively with local partners and stakeholders to address the most pressing health, education, and social challenges facing our communities.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through evidence-based programs and compassionate service, we empower individuals and families to achieve their full potential and build a healthier, more prosperous future.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We envision a Malawi where every person has access to quality healthcare, education, and opportunities for economic advancement. A nation where communities are empowered to lead their own development and where no one is left behind.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that through collective action, innovation, and unwavering commitment to human dignity, we can create lasting positive change that benefits generations to come.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-foreground mb-8">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-6 border border-border hover:shadow-elevated transition-smooth"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">{value.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Objectives */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-foreground mb-8">Our Strategic Objectives</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {objectives.map((obj, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex-shrink-0">
                      <obj.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground text-sm">{obj.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* History */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-12">Our Journey</h2>
              <div className="space-y-8">
                {[
                  { year: "2010", title: "Foundation", description: "Thembi Community Initiative was founded with a vision to transform lives in Chitipa, Malawi." },
                  { year: "2012", title: "First Programs", description: "Launched our flagship health and education programs, reaching 500+ community members." },
                  { year: "2015", title: "Expansion", description: "Expanded to five core programs and established partnerships with international organizations." },
                  { year: "2018", title: "Growth", description: "Reached over 50,000 beneficiaries and established our youth empowerment initiative." },
                  { year: "2021", title: "Resilience", description: "Adapted programs during COVID-19 to continue serving vulnerable communities." },
                  { year: "2024", title: "Impact", description: "Now serving 280,000+ people annually with 18,000+ volunteers and supporters." },
                ].map((milestone, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {index + 1}
                      </div>
                      {index < 5 && <div className="w-px h-16 bg-primary/20 mt-2"></div>}
                    </div>
                    <div className="pb-8">
                      <div className="text-xs font-semibold text-primary mb-1">{milestone.year}</div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>


      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Whether through volunteering, donations, or advocacy, your support helps us continue our mission of empowering communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-smooth"
            >
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-smooth"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </Base>
  );
}


