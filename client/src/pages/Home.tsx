import { Link } from "wouter";
import HeroSection from "@/components/HeroSection";
import NewsGrid from "@/components/NewsGrid";
import NewsTicker from "@/components/NewsTicker";
import { Heart, Users, BookOpen, Briefcase, Lightbulb, ArrowRight, Star, MessageCircle, MapPin } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { Skeleton } from "@/components/ui/skeleton";
import Base from "@/components/layout/Base";
import ImpactCounter from "@/components/Home/ImpactCounter";
import ChitipaMap from "@/components/Home/ChitipaMap";
import HopeSidebar from "@/components/Home/HopeSidebar";
import BeforeAfterSlider from "@/components/Home/BeforeAfterSlider";
import PartnerMarquee from "@/components/Home/PartnerMarquee";

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
    <Base>
      <div className="w-full">
        {/* Hero & Top Bar */}
        <HeroSection />
        <NewsTicker />

        <div className="container py-12 md:py-24 lg:py-32">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Main Content Area */}
            <div className="lg:col-span-9 space-y-32 md:space-y-48">

              {/* Impact Metrics Section */}
              <section id="impact" className="scroll-mt-32">
                <div className="mb-16">
                  <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">Our Impact</h2>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                    Real numbers reflecting our commitment to transforming communities and changing lives across Malawi.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <ImpactCounter
                    value={impact?.totalBeneficiaries || 125000}
                    label="People Supported"
                    subtext="During crises and ongoing programs"
                    icon={Users}
                  />
                  <ImpactCounter
                    value={18000}
                    label="Volunteers"
                    subtext="Acting for humanity across Malawi"
                    icon={Heart}
                  />
                  <ImpactCounter
                    value={139000}
                    label="Volunteer Hours"
                    subtext="Community connections made"
                    icon={MessageCircle}
                  />
                  <ImpactCounter
                    value={5}
                    label="Core Programs"
                    subtext="Transforming lives daily"
                    icon={Star}
                    suffix="+"
                  />
                </div>
              </section>

              {/* Geographic Footprint Section */}
              <section id="map" className="scroll-mt-32">
                <div className="mb-16">
                  <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">Explore Our Footprint</h2>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                    TCI operates across several key wards in the Chitipa District. Hover over the regions below to see localized impact data.
                  </p>
                </div>
                <ChitipaMap />
              </section>

              {/* Before/After Transformation */}
              <section id="transformation" className="scroll-mt-32">
                <div className="mb-16">
                  <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">Visual Transformation</h2>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                    See the life-changing impact of our community projects by sliding to compare the before and after states.
                  </p>
                </div>
                <BeforeAfterSlider
                  beforeImage="/assets/images/placeholder-before.jpg"
                  afterImage="/assets/images/placeholder-after.jpg"
                />
                <p className="mt-8 text-sm text-center text-muted-foreground italic">
                  Note: Official transformation images will be updated shortly.
                </p>
              </section>

              {/* Programs Grid */}
              <section id="programs" className="scroll-mt-32">
                <div className="mb-16">
                  <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">Our Programs</h2>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                    Comprehensive initiatives designed to address the most pressing needs in our communities.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {programs.map((program, index) => {
                    const IconComponent = program.icon;
                    return (
                      <Link key={index} href={program.link}>
                        <div className="group h-full bg-card rounded-3xl overflow-hidden border border-border hover:border-primary hover:shadow-elevated transition-smooth cursor-pointer">
                          <div className={`h-40 bg-gradient-to-br ${program.color} relative overflow-hidden`}>
                            <div className="absolute inset-0 opacity-20">
                              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
                            </div>
                            <div className="relative h-full flex items-center justify-center">
                              <IconComponent className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform" />
                            </div>
                          </div>
                          <div className="p-8">
                            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-smooth">
                              {program.title}
                            </h3>
                            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                              {program.description}
                            </p>
                            <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                              Learn More
                              <ArrowRight className="w-5 h-5" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>

              {/* News Section */}
              <section id="news" className="pt-12 scroll-mt-32">
                <div className="mb-16">
                  <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">Latest News</h2>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                    Stay updated with recent stories, announcements, and events from our community interventions.
                  </p>
                </div>
                <NewsGrid />
              </section>

              {/* Call to Action Section */}
              <section className="py-24 px-12 bg-gradient-to-r from-primary to-accent rounded-[3.5rem] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
                  <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
                </div>

                <div className="max-w-3xl mx-auto text-center relative z-10">
                  <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-8">
                    Ready to Make a Difference?
                  </h2>
                  <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed">
                    Join thousands of supporters transforming lives in Chitipa, Malawi. Whether through donations, volunteering, or advocacy, your contribution matters.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link
                      href="/donate"
                      className="px-10 py-5 bg-white text-primary rounded-2xl font-bold shadow-xl hover:bg-white/90 transition-smooth"
                    >
                      Donate Now
                    </Link>
                    <Link
                      href="/volunteer"
                      className="px-10 py-5 bg-primary-foreground/10 text-white border-2 border-white/20 backdrop-blur-md rounded-2xl font-bold hover:bg-white/10 transition-smooth"
                    >
                      Become a Volunteer
                    </Link>
                  </div>
                </div>
              </section>

            </div>

            {/* Right Sidebar - Hope Feed */}
            <aside className="w-full lg:col-span-3 hidden lg:block">
              <HopeSidebar />
            </aside>
          </div>
        </div>

        {/* Global Partner Marquee */}
        <PartnerMarquee />
      </div>
    </Base>
  );
}
