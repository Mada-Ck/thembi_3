import { Link } from "wouter";
import { CheckCircle, Users, Target, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We care deeply for the communities we serve and act with empathy in all our work.",
    },
    {
      icon: Target,
      title: "Impact",
      description: "We focus on measurable, sustainable change that transforms lives for the better.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of communities working together to create lasting solutions.",
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "We operate with transparency, accountability, and the highest ethical standards.",
    },
  ];

  return (
    <div className="w-full">
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

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Thembi Community Initiative is dedicated to transforming lives and strengthening communities in Chitipa, Malawi. We work collaboratively with local partners and stakeholders to address the most pressing health, education, and social challenges facing our communities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through evidence-based programs and compassionate service, we empower individuals and families to achieve their full potential and build a healthier, more prosperous future.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We envision a Malawi where every person has access to quality healthcare, education, and opportunities for economic advancement. A nation where communities are empowered to lead their own development and where no one is left behind.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that through collective action, innovation, and unwavering commitment to human dignity, we can create lasting positive change that benefits generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and define our organizational culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 text-center border border-border hover:shadow-elevated transition-smooth"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Journey</h2>
          
          <div className="max-w-3xl mx-auto">
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
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    {index < 5 && <div className="w-1 h-16 bg-primary/20 mt-2"></div>}
                  </div>
                  <div className="pb-8">
                    <div className="text-sm font-semibold text-primary mb-1">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}
