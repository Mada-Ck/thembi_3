import { Link } from "wouter";
import { ArrowRight, Heart } from "lucide-react";
import { useSlideshow, useImpactStats } from "../hooks/useCmsData";
import { Skeleton } from "./ui/skeleton";

export default function HeroSection() {
  const { data: slideshow, isLoading: slidesLoading } = useSlideshow();
  const { data: impact, isLoading: impactLoading } = useImpactStats();

  const currentSlide = slideshow?.slides?.[0] || {
    title: "Empowering Communities, Changing Lives",
    subtitle: "Thembi Community Initiative is dedicated to transforming lives in Chitipa, Malawi through comprehensive health, education, and youth empowerment programs.",
    image: null
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-block mb-6 px-4 py-2 bg-secondary/20 rounded-full border border-secondary/30">
              <span className="text-secondary font-semibold text-sm">Welcome to Thembi Project</span>
            </div>

            {slidesLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-12 w-3/4 bg-white/20" />
                <Skeleton className="h-20 w-full bg-white/20" />
              </div>
            ) : (
              <>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                  {currentSlide.title}
                </h1>
                <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed max-w-lg">
                  {currentSlide.subtitle}
                </p>
              </>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/donate" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-smooth shadow-lg hover:shadow-xl">
                <Heart className="w-5 h-5" />
                Donate Now
              </Link>
              <Link href="/about" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-smooth">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-smooth group">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform">
                {impactLoading ? <Skeleton className="h-10 w-20 bg-white/20" /> : `${impact?.totalBeneficiaries || 0}+`}
              </div>
              <p className="text-primary-foreground/90 font-medium">Beneficiaries</p>
              <p className="text-sm text-primary-foreground/70 mt-2">People supported directly</p>
            </div>
            
            {/* Other static or dynamic stats can follow */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-smooth group">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform">
                100%
              </div>
              <p className="text-primary-foreground/90 font-medium">Transparency</p>
              <p className="text-sm text-primary-foreground/70 mt-2">Funds go to programs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
