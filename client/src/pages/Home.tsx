import { Link } from "wouter";
import HeroSection from "@/components/HeroSection";
import NewsGrid from "@/components/NewsGrid";
import NewsTicker from "@/components/NewsTicker";
import { Heart, Users, BookOpen, Briefcase, Lightbulb, ArrowRight } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const { data: impact, isLoading: impactLoading } = trpc.reporting.getImpactStats.useQuery();

  const programs = [
    {
      icon: Heart,
      title: "Health",
      description: "Comprehensive healthcare services including HIV testing, treatment, and prevention programs.",
      link: "/health",
      color: "from-primary to-accent",
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "Quality education and literacy programs empowering youth for a better future.",
      link: "/education",
      color: "from-secondary to-primary",
    },
    {
      icon: Briefcase,
      title: "Livelihood",
      description: "Economic empowerment through skills training and business development initiatives.",
      link: "/livelihood",
      color: "from-accent to-secondary",
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Building strong communities through collaborative programs and local leadership.",
      link: "/community-empowerment",
      color: "from-primary to-secondary",
    },
    {
      icon: Lightbulb,
      title: "Youth Empowerment",
      description: "Inspiring the next generation with opportunities, mentorship, and skills development.",
      link: "/youth-empowerment",
      color: "from-accent to-primary",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />
      <NewsTicker />

      {/* Impact Metrics Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real numbers reflecting our commitment to transforming communities and changing lives across Malawi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-xl p-8 text-center hover:shadow-elevated transition-smooth border border-border">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {impactLoading ? <Skeleton className="h-10 w-24 mx-auto" /> : `${impact?.totalBeneficiaries || 0}+`}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">People Supported</h3>
              <p className="text-sm text-muted-foreground">During crises and ongoing programs</p>
            </div>
            {/* Other metrics can be added or remain static for now */}
            <div className="bg-card rounded-xl p-8 text-center hover:shadow-elevated transition-smooth border border-border">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">18K+</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Volunteers</h3>
              <p className="text-sm text-muted-foreground">Acting for humanity across Malawi</p>
            </div>
            <div className="bg-card rounded-xl p-8 text-center hover:shadow-elevated transition-smooth border border-border">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">139K+</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Volunteer Hours</h3>
              <p className="text-sm text-muted-foreground">Community connections made</p>
            </div>
            <div className="bg-card rounded-xl p-8 text-center hover:shadow-elevated transition-smooth border border-border">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5+</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Core Programs</h3>
              <p className="text-sm text-muted-foreground">Transforming lives daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive initiatives designed to address the most pressing needs in our communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Link key={index} href={program.link}>
                  <div className="group h-full bg-card rounded-xl overflow-hidden border border-border hover:border-primary hover:shadow-elevated transition-smooth cursor-pointer">
                    <div className={`h-32 bg-gradient-to-br ${program.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
                      </div>
                      <div className="relative h-full flex items-center justify-center">
                        <IconComponent className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {program.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <NewsGrid />

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Join thousands of supporters transforming lives in Chitipa, Malawi. Whether through donations, volunteering, or advocacy, your contribution matters.
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
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
